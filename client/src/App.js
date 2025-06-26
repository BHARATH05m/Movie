import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import ComedyMovies from './ComedyMovies';
import ActionMovies from './ActionMovies';
import ThrillerMovies from './ThrillerMovies';
import FamilyMovies from './FamilyMovies';

function App() {
  const [page, setPage] = useState('login'); // 'login', 'signup', 'home'
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [selectedGenre, setSelectedGenre] = useState('comedy');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = async ({ email, password, setError }) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setPage('home');
      } else {
        setError(data.msg || 'Login failed');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  const handleSignup = async ({ name, email, password, setError }) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        setPage('login'); // Redirect to login after signup
      } else {
        setError(data.msg || 'Signup failed');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
    setPage('login');
  };

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

  if (!token) {
    if (page === 'signup') {
      return <Signup onSignup={handleSignup} goToLogin={() => setPage('login')} />;
    }
    return <Login onLogin={handleLogin} goToSignup={() => setPage('signup')} />;
  }

  return (
    <div className="App">
      <Navbar onGenreSelect={setSelectedGenre} onSearch={setSearchTerm} searchTerm={searchTerm} onLogout={handleLogout} />
      {renderGenreComponent()}
    </div>
  );
}

export default App;
