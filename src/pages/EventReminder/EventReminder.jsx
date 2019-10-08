import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EventReminder.css';

class EventReminder extends Component {
  state = {
    event: '',
    where: '',
    time: '',
    date: '',
    reminder: ''
  };

  render() {
    return (
      <div className="EventReminder">
        <header className="header-footer"><i className="fas fa-calendar-alt"></i>Event Reminder</header>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <span className="txt">Event Type: </span>&nbsp;&nbsp;&nbsp;
              <input type="event" className="form-control" placeholder="Event" value={this.state.event} name="event" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span className="txt">Where: </span>&nbsp;&nbsp;&nbsp;
              <input type="where" className="form-control" placeholder="Where" value={this.state.where} name="where" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span className="txt">Date: </span>&nbsp;&nbsp;&nbsp;
              <input type="date" className="form-control" placeholder="Date" value={this.state.date} name="date" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span className="txt">Time: </span>&nbsp;&nbsp;&nbsp;
              <input type="time" className="form-control" placeholder="Time" value={this.state.time} name="time" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span className="txt">Reminder: </span>&nbsp;&nbsp;&nbsp;
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

export default EventReminder;
