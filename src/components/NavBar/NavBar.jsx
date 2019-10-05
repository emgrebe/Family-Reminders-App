import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className="NavBar-title">
        Family Reminders
      </div>
      <div className="NavBar-login">
        <Link to="/login" className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
      </div>
    </div>
  );
};

export default NavBar;