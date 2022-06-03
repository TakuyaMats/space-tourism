import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology/Technology';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element= {<Destination/>}/>
        <Route path='/crew' element= {<Crew />}/>
        <Route path='/technology' element= {<Technology/>}/>
      </Routes>
    </div>
  );
}

export default App;
