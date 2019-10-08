import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../pages/utils/userService';
import './SignupForm.css';

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    birthday: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.phone && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="SignupForm">
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="phone" className="form-control" placeholder="Phone" value={this.state.phone} name="phone" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="date" className="form-control" placeholder="Birthday" value={this.state.birthday} name="birthday" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/login' className=' login btn-default'>Already Have an Account? Login</Link>
              <Link to='/' className='btn-default'>Cancel</Link>
            </div>
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
