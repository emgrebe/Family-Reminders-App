import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../utils/userService';

class App extends React.Component {
  state = {
    user: userService.getUser(),
    reminders: '',
    answer: ''
  }

  handleLogout = () => {
    userService.logOut()
    this.setState({
      user : null
    })
  }

  handleSignupOrLogin = () => {
    this.setState({
      user : userService.getUser()
    })
  }

  async componentDidMount() {
    console.log("App did mount")
  }
  
  render() {
    return(
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/signup' render={({history}) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={() =>
            <LoginPage
              // history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          :
          <Redirect to='/login'/>
        </Switch>
      </div>
    );
  }
}

export default App;
