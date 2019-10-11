import React from 'react';
import './MyProfile.css';
import ReminderCard from '../../components/ReminderCard/ReminderCard';
import ProfilePost from '../../components/Profile'

class MyProfile extends React.Component {
  render() {
    
    // this.props.user.map((user, idx, reminder)=> {
    //   return (
    //     <ReminderCard 
    //     {...reminder}
    //     // user=this.props.user}
    //     key={idx}
    //     />
    //   )
    // })

    const profile = this.props.user ? 
    // this.props.user.map((user, idx) => {
    //   return (
        <ProfilePost 
        state={this.props.state}
        user={this.props.user}
        
        />
    //   )
    // })
    // console.log(this.props.user)
    :
    "idk"

    return (
      <div className="MyProfile">

        {profile}
        {/* {reminds} */}
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