import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactme" className="nav-link">Contact Us</Link>
        </li>
        <li className="nav-item">
            <Link to="/" className="nav-link">Start Your Booking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
