import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import HeroeApp from './HeroeApp';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroeApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
