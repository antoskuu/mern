import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Autre from './pages/Autre';
import Test from './pages/Test';
import Stemplayer from './pages/Stemplayer';

const App = () => {
  return (
    <div className="app-container"> {/* Ajout de la classe ici */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autre" element={<Autre />} />
        <Route path="/test" element={<Test/>} />
        <Route path="/stemplayer" element={<Stemplayer />} />
      </Routes>
    </div>
  );
};

export default App;