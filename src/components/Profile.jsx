import React from 'react'
import {Link} from 'react-router-dom';


function ProfilePost ({name, phone, email, birthdate, reminder}) {
  
  return (
    <div className="MyProfile">
    <header className="header-footer"><i className="fas fa-id-badge"></i>My Profile</header>
      <div className="MyProfile-card">
        <label>Name: {name} </label>          
        <label>Phone: {phone}</label>
        <label>Email: {email} </label>
        <label>Birthday:{birthdate} </label>
      </div>
    <form className="form-horizontal">
      <label>Current Reminders: </label>
        <Link to="/">
          <label className="return">RETURN</label>
        </Link>
    </form>
  </div>
  )
}

export default ProfilePost;