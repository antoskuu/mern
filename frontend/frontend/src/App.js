import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Autre from './pages/Autre';
import Test from './pages/Test';
import Suivi from './pages/Suivi';
import Recherche from './pages/Recherche';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autre" element={<Autre />} />
        <Route path="/test" element={<Test/>} />
        <Route path="/suivi" element={<Suivi />} />
        <Route path='/recherche' element={<Recherche />} />
      </Routes>
    </div>
  );
};

export default App;