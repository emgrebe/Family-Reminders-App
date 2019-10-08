import React from 'react';
import {Link} from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = (props) => {
  let nav = props.user ?
    <div className='WelcomePage'>
      <Link to='/birthdays' className='c1 r1 btn'><i className="fas fa-gifts"></i>Send A Birthday Reminder</Link>
      <Link to='/events' className='c2 r1 btn'><i className="fas fa-calendar-alt"></i>Send An Event Reminder</Link>
      <Link to='/familyinfo' className='c1 r2 btn'><i className="fas fa-users"></i>View Family Contact Info</Link>
      <Link to='/myprofile' className='c2 r2 btn'><i className="fas fa-id-badge"></i>View My Profile</Link>
    </div>
    :
    <div className='WelcomePage-loginSignup'>
      <Link to='/' className='c1 r1 btn'><i className="fas fa-gifts"></i>Send A Birthday Reminder</Link>
      <Link to='/' className='c2 r1 btn'><i className="fas fa-calendar-alt"></i>Send An Event Reminder</Link>
      <Link to='/' className='c1 r2 btn'><i className="fas fa-users"></i>View Family Contact Info</Link>
      <Link to='/' className='c2 r2 btn'><i className="fas fa-id-badge"></i>View My Profile</Link>
    </div>;
    return (
      <div>
        {nav}
      </div>
    )
}

export default WelcomePage;