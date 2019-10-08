import React from 'react';
import {Link} from 'react-router-dom';
import './MyProfile.css';

class MyProfile extends React.Component {
  
  render() {
    return (
      <div className="MyProfile">
        <header className="header-footer"><i className="fas fa-id-badge"></i>My Profile</header>
        <form className="form-horizontal">
          <div className="MyProfile-card">
            <span>Name: </span>
            <span>Phone: </span>
            <span>Email: </span>
            <span>Birthday: </span>
            <span>Current Reminders: </span>
            <Link to="/"><span className="return">RETURN</span></Link>
          </div>
        </form>
      </div>
    )};
  } 


export default MyProfile;