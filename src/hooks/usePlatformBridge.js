import { useCallback, useEffect } from "react";

export const usePlatformBridge = ({ onMessage }) => {
  // Send message to native ( android and iOS )
  const sendToNative = useCallback((handlerName, message) => {
    if (
      typeof window !== "undefined" &&
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers[handlerName]
    ) {
      window.webkit.messageHandlers[handlerName].postMessage(message);
      console.log(`Sent message from widget to native iOS (${handlerName}):`, message);
    } else {
      console.warn(`Native handler '${handlerName}' not available`);
    }
  }, []);

  // Send message to another window (web-to-web)
  const sendToWeb = useCallback((targetWindow, message, targetOrigin = "*") => {
    if (targetWindow && typeof targetWindow.postMessage === "function") {
      targetWindow.postMessage(message, targetOrigin);
      console.log(`Sent message from widget to web app :`, message);
    } else {
      console.warn("Target window does not support postMessage");
    }
  }, []);

  // Listen for incoming messages (from native or web)
  useEffect(() => {
    // Set up native → web hook (for iOS WKWebView)
    window.receiveMessageFromNative = function (message) {
      console.log('Received Message from Native:', message);
      window.dispatchEvent(new CustomEvent('nativeMessage', { detail: message }));
    };

    const listener = (event) => {
      //skip react-devtools events as there are ton of them
      if (
        event?.data?.source &&
        event?.data.source.startsWith("react-devtools")
      ) {
        return;
      }
      console.log(event)
      // Skip self-fired messages 
      if (event.source === window) {
        return;
      }
      if (event.data) {
        console.log("Received message:", event.data);
        if (typeof onMessage === "function") {
          onMessage(event.data, event.origin, event);
        }
      }
    };
    
    window.addEventListener("nativeMessage", listener);
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
      window.removeEventListener("nativeMessage", listener);
    };
  }, [onMessage]);

  return { sendToNative, sendToWeb };
};
