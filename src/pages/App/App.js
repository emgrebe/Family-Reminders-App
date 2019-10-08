import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../utils/userService';
import WelcomePage from '../WelcomePage/WelcomePage';
import BirthdayReminder from '../BirthdayReminder/BirthdayReminder';
import EventReminder from '../EventReminder/EventReminder';
import FamilyInfo from '../FamilyInfo/FamilyInfo';
import MyProfile from '../MyProfile/MyProfile';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    birthday: Date,
    user: userService.getUser()
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
            <BirthdayReminder />
          }/>
          <Route exact path='/events' render={() =>
            <EventReminder />
          }/>
          <Route exact path='/familyinfo' render={() =>
            <FamilyInfo />          }/>
          <Route exact path='/myprofile' render={() =>
            <MyProfile />
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
