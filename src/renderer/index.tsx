import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

declare global {
  interface Window {
    electronAPI: {
      ping: () => Promise<string>;
    };
  }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
