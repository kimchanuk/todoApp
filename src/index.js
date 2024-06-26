import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataContextProvider } from './context/Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);
