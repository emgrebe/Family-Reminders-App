import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../utils/userService';

class App extends React.Component {
  state = {
    reminders: '',
    answer: '',
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
      <div className="App">
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
