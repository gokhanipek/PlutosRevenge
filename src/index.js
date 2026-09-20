import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

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
  const scale = Math.max(0.2, Math.min(availW / GAME_WIDTH, availH / GAME_HEIGHT));
  root.style.setProperty('--app-scale', String(scale));
}

applyGameScale();
window.addEventListener('resize', applyGameScale);
window.addEventListener('orientationchange', applyGameScale);
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', applyGameScale);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
