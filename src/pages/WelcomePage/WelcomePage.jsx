import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './WelcomePage.css';

class WelcomePage extends Component {
    state = {
      name: '',
      email: '',
      phone: '',
  }

  render() {
    return (
      <div className='WelcomePage'>
        <Link to='/birthdays' className='c1 r1 btn'><i className="fas fa-gifts"></i>Send A Birthday Reminder</Link>
        <Link to='/events' className='c2 r1 btn'><i className="fas fa-calendar-alt"></i>Send An Event Reminder</Link>
        <Link to='/familyinfo' className='c1 r2 btn'><i className="fas fa-users"></i>View Family Contact Info</Link>
        <Link to='/myprofile' className='c2 r2 btn'><i className="fas fa-id-badge"></i>View My Profile</Link>
      </div>
    );
  }
}

export default WelcomePage;