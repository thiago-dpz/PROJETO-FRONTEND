import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Arquivo CSS global opcional
import App from './App'; // Importa o componente raiz da sua aplicação

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);