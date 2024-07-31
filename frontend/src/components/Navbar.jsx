








import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    alert('Logged out successfully!');
    navigate('/'); // Navigate to home page after logout
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        
        <span className="fit">Fit</span> 
          <span className="track">Track</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/log">Log</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {loggedIn ? (
          <li>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
      <div className="navbar-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
