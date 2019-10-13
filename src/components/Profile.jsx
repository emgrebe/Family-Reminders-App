import React from 'react'
import {Link} from 'react-router-dom';


function ProfilePost ({user, state}) {

  const show = state.reminders ? state.reminders.reminder : user.reminder[user.reminder.length - 1].reminder
  
  return (
    <div className="MyProfile">
    <header className="header-footer"><i className="fas fa-id-badge"></i>My Profile</header>
      <div className="MyProfile-card">
        <label>Name: {user.name} </label>          
        <label>Phone: {user.phone}</label>
        <label>Email: {user.email} </label>
        <label>Birthday:{user.birthday} </label>
      </div>
    <form className="form-horizontal">
      <label>Current Reminders: {show} </label>
        <Link to="/">
          <label className="return">RETURN</label>
        </Link>
    </form>
  </div>
  )
}

export default ProfilePost;