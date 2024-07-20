import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Autre from './pages/Autre';
import Test from './pages/Test';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autre" element={<Autre />} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </div>
  );
};

export default App;