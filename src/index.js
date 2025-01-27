import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";
import {AuthProvider} from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
const root =createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <AuthProvider>
          <Routes>
          <Route  path="/" element={<HomePage/>} />{/*default Route*/}
          <Route path='/*' element={<App/>}>
           </Route>
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  
);

