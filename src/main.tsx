import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Importa tus estilos

const container = document.getElementById('root'); // Asegúrate de que el ID coincida con el de tu HTML
const root = createRoot(container!); // Usa 'createRoot' para inicializar React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
