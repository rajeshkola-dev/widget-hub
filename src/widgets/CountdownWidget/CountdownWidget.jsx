import React, { useState, useEffect } from "react";
import { usePlatformBridge } from "../../hooks/usePlatformBridge.js";

export const CountdownWidget = ({ initialDuration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [running, setRunning] = useState(false);
  const [nativeMessage, setNativeMessage] = useState("");


  const { sendToNative, sendToWeb } = usePlatformBridge({
    onMessage: (data, origin) => {
      console.log('Widget received message:', data, 'from origin:', origin);
      if (origin === 'native') {
        setNativeMessage(data);
      }
    }
  });

  useEffect(() => {
    if (!running) return;

    if (timeLeft <= 0) {
      onComplete?.();
      setRunning(false);
      let msg = {message: 'Timer Ended in Countdown widget'};
      sendToNative('iosListener', msg);
      sendToWeb(window.parent, msg);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running, timeLeft]);

  const start = () => {
    setTimeLeft(initialDuration);
    setRunning(true);
    let msg = {message: 'Timer Started in Countdown widget'};
    sendToNative('iosListener', msg);
    sendToWeb(window.parent, msg);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        width: "auto",
        textAlign: "center",
      }}
    >
      <h1>Countdown Widget</h1>
      <p>Info: Message will be sent to the native/web platforms on timer start and end</p>
      <h3>{timeLeft}s</h3>
      <button onClick={start} disabled={running}>
        Start Timer
      </button>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          margin: "10px",
          fontSize: "16px",
        }}
      >
        <h3>Message from Native App:</h3>
        <div>{typeof nativeMessage === 'object' ? JSON.stringify(nativeMessage) : nativeMessage}</div>
      </div>
    </div>
  );
};

export default CountdownWidget;
