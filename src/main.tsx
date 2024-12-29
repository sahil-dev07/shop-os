import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')!).render(
  // Add the "!" to assert it's not null
  <StrictMode>
    <App />
  </StrictMode>
);
