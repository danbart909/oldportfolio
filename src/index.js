import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { VFXProvider } from 'react-vfx';
import App from './App';
import './index.css';
import './normalize.css'

ReactDOM.render(
  <VFXProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </VFXProvider>,
  document.getElementById('root')
);