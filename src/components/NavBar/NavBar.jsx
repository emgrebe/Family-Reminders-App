import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <div>
    <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
  </div>
  :
  <div className="NavBar-login">
    <Link to='/login' className='NavBar-link'>LOG IN</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
  </div>;
  return (
    <div className='NavBar'>
      <div className="NavBar-title">
        Family Reminders
      </div>
      {nav}
    </div>
  );
};

export default NavBar;