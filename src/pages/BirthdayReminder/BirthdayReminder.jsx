import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BirthdayReminder.css';

class BirthdayReminder extends Component {
  state = {
    name: '',
    date: '',
    reminder: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  render() {
    return (
      <div className="BirthdayReminder">
        <header className="header-footer"><i className="fas fa-gifts"></i>Birthday Reminder</header>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <span>Name: </span>&nbsp;&nbsp;&nbsp;
              <input type="name" className="form-control" placeholder="Whose Birthday" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span>Date: </span>&nbsp;&nbsp;&nbsp;
              <input type="date" className="form-control" placeholder="Date" value={this.state.date} name="date" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span>Reminder: </span>&nbsp;&nbsp;&nbsp;
              <input type="reminder" className="form-control" placeholder="Reminder Message..." value={this.state.reminder} name="reminder" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-bottom">
              <Link to='/myprofile' className="btn-default">Submit</Link>&nbsp;&nbsp;&nbsp;
              <Link to='/' className='btn-default'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BirthdayReminder;
