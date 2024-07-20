import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/autre">Autre</Link>
      <Link to="/test">Test</Link>

    </nav>
  );
};

export default Navbar;