import React from 'react';
import ReactDOM from 'react-dom/client';
import { CountdownWidget } from './CountdownWidget.jsx';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  const container = document.createElement('div');
  container.id = 'countdown-widget-container';
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    <CountdownWidget initialDuration={300} />
  );
}
