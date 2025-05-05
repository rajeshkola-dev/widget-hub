# Widget-Hub

**Reusable Cross-Platform React Widgets for Web and Native Apps**

---

## 🚀 Overview

Widget-Hub is a modular system that provides ready-to-use React widgets, designed to integrate seamlessly into:

✅ Web applications (React or non-React)
✅ Native iOS/Android applications (via WebView)

The platform supports robust two-way communication between host apps, widgets, and native mobile layers.

---

## 📦 Features

* 🌍 Hosted widgets available at routes like `https://widget-hub.com/countdown`
* 📦 Installable as npm modules (`import { CountdownWidget } from 'widget-hub'`)
* 🔊 Supports Web ↔ Native ↔ Web communication using a custom React hook (`usePlatformBridge`)
* ⚡ Bundled using Rollup.js for optimized ESM  builds

---

## 🔧 Development

```bash
git clone https://github.com/your-org/widget-hub.git
cd widget-hub
npm install
npm run build //to build esm module packages.
npm run app-build //to build the application to host
npm run start //to start the dev environment with live reloading 
```

---

## 🏗 Architecture Summary

* **Core:** React widgets, bundled with Rollup.js
* **Communication:** Handled by `usePlatformBridge` React hook

