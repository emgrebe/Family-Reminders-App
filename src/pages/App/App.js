import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

class App extends React.Component {
  state = {
    reminders: ''
  }
  render() {
    return(
      <div>
        <header>Family Reminders</header>
        <NavBar />
        <Switch>
          <Route exact path='/signup' render={({history}) =>
            <SignupPage
              history={history}
            />
          }/>
          <Route exact path='/login' render={() =>
            <LoginPage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
