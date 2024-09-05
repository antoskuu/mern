import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && searchTerm.trim()) {
      handleSearch();
    }
  };
  const handleSearch = () => {
    if (searchTerm.length === 0) {
      return;
    }
    // Rediriger l'utilisateur vers la page de recherche avec le terme de recherche comme paramètre de requête
    navigate(`/recherche?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/autre" className="nav-link">Autre</Link>
      <Link to="/test" className="nav-link">Test</Link>
      <Link to="/stemplayer" className="nav-link">Stemplayer</Link>
    </nav>
  );
};

export default Navbar;