import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/index.css';

import Home from './pages/home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/regex-validator" element={<Home/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

