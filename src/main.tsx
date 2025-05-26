import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Add loading class to prevent FOUC
document.documentElement.classList.add('loading');

// Remove loading class after the page is loaded
window.addEventListener('load', () => {
  document.documentElement.classList.remove('loading');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);