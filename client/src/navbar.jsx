import React from 'react';
import './navbar.css';
import ComedyMovies from './ComedyMovies';
import ActionMovies from './ActionMovies';
import ThrillerMovies from './ThrillerMovies';
import FamilyMovies from './FamilyMovies';
import SearchBar from './SearchBar';

const Navbar = ({ onGenreSelect, onSearch, searchTerm, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MovieApp</div>
      <ul className="navbar-links">
        <li onClick={() => onGenreSelect('comedy')}>Comedy Movies</li>
        <li onClick={() => onGenreSelect('action')}>Action Movies</li>
        <li onClick={() => onGenreSelect('thriller')}>Thriller Movies</li>
        <li onClick={() => onGenreSelect('family')}>Family Movies</li>
      </ul>
      <div className="navbar-search">
        <SearchBar value={searchTerm} onChange={onSearch} />
      </div>
      {onLogout && (
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar; 