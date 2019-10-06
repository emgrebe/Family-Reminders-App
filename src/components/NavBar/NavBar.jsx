import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <div className='NavBar-loginLogout'>
    <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    <Link to='' className='NavBar-logout' onClick={props.handleLogout}>LOG OUT</Link>
  </div>
  :
  <div className="NavBar-login">
    <div className="NavBar-title">
      Family Reminders
    </div>
    <div className='NavBar-links'>
    <Link to='/login' className='NavBar-link NavBar-login'><i className="fas fa-user-circle"></i>LOG IN</Link>
     &nbsp;&nbsp; &nbsp;&nbsp;
    <Link to='/signup' className='NavBar-link NavBar-signup'><i className="fas fa-users"></i>SIGN UP</Link>
    </div>
  </div>;
  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;