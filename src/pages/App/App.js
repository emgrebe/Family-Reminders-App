import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../utils/userService';
import * as Reminders from '../utils/reminders';
import WelcomePage from '../WelcomePage/WelcomePage';
import BirthdayReminder from '../BirthdayReminder/BirthdayReminder';
import EventReminder from '../EventReminder/EventReminder';
import FamilyInfo from '../FamilyInfo/FamilyInfo';
import MyProfile from '../MyProfile/MyProfile';

class App extends React.Component {
  state = {
    formData: {
      name: '',
      email: '',
      phone: '',
      birthday: Date,
      reminders: [],
    },
    user: [userService.getUser()]
  }

  handleLogout = () => {
    userService.logOut();
    this.setState({
      user : null
    });
  }

  handleSignupOrLogin = () => {
    this.setState({
      user : userService.getUser()
    });
  }

  handleAddReminder = async newReminderData => {
    const newReminder = await Reminders.create(newReminderData);
    this.setState(state => ({
      reminders: [...state.formData.reminders, newReminder]
    }), () => this.props.history.push('/myprofile'));
  }

  handleUpdateReminder = async updatedReminderData => {
    const updatedReminder = await Reminders.update(updatedReminderData);
    const newRemindersArray = this.state.formData.reminders.map(r => 
      r._id === updatedReminder._id ? updatedReminder : r
    );
    this.setState(
      {reminders: newRemindersArray},
      () => this.props.history.push('/myprofile')
    );
  }

  // handleDeleteReminder = async id => {
  //   await Reminders.deleteOne(id);
  //   this.setState(state => ({
  //     reminders: state.reminders.filte4r(r => r._id !== id)
  //   }), () => this.props.history.push('/myprofile'));
  // }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    try {
      const reminders = await Reminders.getAll();
      this.setState({reminders});

    } catch (error) {
      console.error(error)
    }
   };
  
  render() {
    return(
      <div className='App'>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />        
        <Switch>

          <Route exact path='/signup' render={({history}) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>

          <Route exact path='/' render={() =>
            <WelcomePage
              user={this.state.user}
            />
          }/>

          <Route exact path='/birthdays' render={() =>
            <BirthdayReminder
              handleAddReminder={this.handleAddReminder}
            />
          }/>

          <Route exact path='/events' render={() =>
            <EventReminder
              handleAddReminder={this.handleAddReminder}
            />
          }/>

          <Route exact path='/familyinfo' render={() =>
            <FamilyInfo />          
          }/>

          <Route exact path='/myprofile' render={(history, location) =>
            <MyProfile
              user={this.state.user}
              handleUpdateReminder={this.handleUpdateReminder}
              location={location}
            />
           }/>

          <Route exact path='/login' render={({history}) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>

        </Switch>
      </div>
    );
  }
}

export default App;
