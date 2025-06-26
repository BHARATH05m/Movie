import React, { useState } from 'react';
import Navbar from './navbar';
import ComedyMovies from './ComedyMovies';
import ActionMovies from './ActionMovies';
import ThrillerMovies from './ThrillerMovies';
import FamilyMovies from './FamilyMovies';

const Home = ({ onLogout }) => {
  const [selectedGenre, setSelectedGenre] = useState('comedy');
  const [searchTerm, setSearchTerm] = useState('');

  const renderGenreComponent = () => {
    switch (selectedGenre) {
      case 'comedy':
        return <ComedyMovies search={searchTerm} />;
      case 'action':
        return <ActionMovies search={searchTerm} />;
      case 'thriller':
        return <ThrillerMovies search={searchTerm} />;
      case 'family':
        return <FamilyMovies search={searchTerm} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar onGenreSelect={setSelectedGenre} onSearch={setSearchTerm} searchTerm={searchTerm} onLogout={onLogout} />
      {renderGenreComponent()}
    </div>
  );
};

export default Home; 