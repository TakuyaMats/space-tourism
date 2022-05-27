import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';

import Destination from './pages/Destination';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/destination' element= {<Destination/>}/>
        <Route path='/crew' element= {<Crew/>}/>
        <Route path='/technology' element= {<Technology/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

