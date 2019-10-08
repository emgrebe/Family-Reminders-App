import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BirthdayReminder.css';

class BirthdayReminder extends Component {
  state = {
    name: '',
    date: '',
    reminder: ''
  };

  render() {
    return (
      <div className="BirthdayReminder">
        <header className="header-footer"><i className="fas fa-gifts"></i>Birthday Reminder</header>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <span>Name: </span>&nbsp;&nbsp;&nbsp;
              <input type="name" className="form-control" placeholder="Name" value={this.state.name} name="name" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span>Date: </span>&nbsp;&nbsp;&nbsp;
              <input type="date" className="form-control" placeholder="Date" value={this.state.date} name="date" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span>Reminder: </span>&nbsp;&nbsp;&nbsp;
              <input type="reminder" className="form-control" placeholder="Reminder Message..." value={this.state.reminder} name="reminder" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Submit</button>&nbsp;&nbsp;&nbsp;
              <Link to='/' className='cancel'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BirthdayReminder;
