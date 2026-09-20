import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';
import { initSession } from './lib/sessionSync';
import './index.css';
import App from './App';

// Vite's `base` is the single source of truth for where the game is hosted, so
// the router derives its basename from it rather than hardcoding the sub-path.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* Nothing renders until the persisted run is back in the store, so the
          route gate can decide synchronously whether a run is in progress. */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// Anonymous identity and backend recovery are deliberately off the render path:
// the game is already playable before either resolves.
initSession(store);

// The game is authored at a fixed 800x500 canvas (.app-wrapper). Scale it to
// fit the viewport / embedding iframe while preserving the aspect ratio, so it
// is fully visible on phones and small windows. We set a CSS variable that
// index.css applies as a transform on .app-wrapper.
const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

function applyGameScale() {
  const root = document.getElementById('root');
  if (!root) return;
  const margin = 8;
  const availW = window.innerWidth - margin * 2;
  const availH = window.innerHeight - margin * 2;
  // No generous lower clamp: the canvas must always fit, otherwise its frame
  // would be wider than the viewport and the page would need scrollbars.
  const scale = Math.max(0.05, Math.min(availW / GAME_WIDTH, availH / GAME_HEIGHT));
  root.style.setProperty('--app-scale', String(scale));
}

applyGameScale();
window.addEventListener('resize', applyGameScale);
window.addEventListener('orientationchange', applyGameScale);
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', applyGameScale);
}
// The game is embedded in an iframe on gokhanipek.com, and the canvas frame must
// never end up wider than the space it is given — that is what keeps the page
// free of scrollbars. Observing the document element catches layout viewport
// changes that do not arrive as a window resize event.
if (typeof ResizeObserver !== 'undefined') {
  new ResizeObserver(applyGameScale).observe(document.documentElement);
}
