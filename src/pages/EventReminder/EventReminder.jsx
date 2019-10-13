import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EventReminder.css';

class EventReminder extends Component {
  state = {
    formData: {
      event: '',
      where: '',
      time: '',
      date: '',
      reminder: ''
    }
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddReminder(this.state.formData.reminder)
    console.log(this.handleSubmit)
  };

  handleChange = (e) => {
    const formData = {...this.state.formData, [e.target.name] : e.target.value};
    this.setState({
      formData
    });
  };

  handleText = () => {
    fetch('/api/twilio')
  }

  render() {
    return (
      <div className="EventReminder">
        <header className="header-footer"><i className="fas fa-calendar-alt"></i>Event Reminder</header>
        <form ref={this.formRef} onSubmit={this.handleSubmit} className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <label>Event Type: </label>&nbsp;&nbsp;&nbsp;
              <input 
                className="form-control" 
                placeholder="Event Type" 
                name="event" 
                value={this.state.formData.event} 
                onChange={this.handleChange} 
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>Where: </label>&nbsp;&nbsp;&nbsp;
              <input 
                className="form-control" 
                placeholder="Where" 
                name="where" 
                value={this.state.formData.where} 
                onChange={this.handleChange} 
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>Date: </label>&nbsp;&nbsp;&nbsp;
              <input 
                type="date" 
                className="form-control" 
                placeholder="Date" 
                name="date" 
                value={this.state.formData.date} 
                onChange={this.handleChange} 
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>Time: </label>&nbsp;&nbsp;&nbsp;
              <input 
                type="time" 
                className="form-control" 
                placeholder="Time" 
                name="time" 
                value={this.state.formData.time} 
                onChange={this.handleChange} 
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>Reminder: </label>&nbsp;&nbsp;&nbsp;
              <input 
                className="form-control" 
                placeholder="Reminder Message..." 
                name="reminder" 
                value={this.state.formData.reminder} 
                onChange={this.handleChange} 
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-bottom">
              <Link to='/myprofile' onClick={this.handleShowReminders}>
                <button
                  type='submit'
                  className='btn-default'
                  disabled={this.state.invalidForm}                 
                >
                  SUBMIT
                </button>
              </Link>&nbsp;&nbsp;&nbsp;
              <Link to='/'>
                <button className='btn-default'>
                  CANCEL
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EventReminder;
