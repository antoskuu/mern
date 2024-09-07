import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Autre from './pages/Autre';
const App = () => {
  return (
    <div className="app-container"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autre" element={<Autre />} />
      </Routes>
    </div>
  );
};

export default App;