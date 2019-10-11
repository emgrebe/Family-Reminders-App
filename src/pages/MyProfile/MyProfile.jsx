import React from 'react';
import {Link} from 'react-router-dom';
import './MyProfile.css';
import ReminderCard from '../../components/ReminderCard/ReminderCard';
import ProfilePost from '../../components/Profile'

class MyProfile extends React.Component {
  render(props) {
    
    const profile = this.props.user ? 
    this.props.user.map((user, idx) => {
      return (
        <ProfilePost 
        {...user}
        user={this.props.user}
        key={idx}
        />
      )
    })
    :
    "idk"

    return (
      <div className="MyProfile">

        {profile}
        {/* <header className="header-footer"><i className="fas fa-id-badge"></i>My Profile</header>
          <div className="MyProfile-card">
            <label>Name: </label>          
            <label>Phone: </label>
            <label>Email: </label>
            <label>Birthday: </label>
          </div>
        <form className="form-horizontal">
          <label>Current Reminders: </label>
          <div className=''>
          <ReminderCard />
          </div>
            <Link to="/">
              <label className="return">RETURN</label>
            </Link>
        </form> */}
      </div>
    )};
  } 


export default MyProfile;