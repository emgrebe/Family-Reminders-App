import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BirthdayReminder.css';

class BirthdayReminder extends Component {
  state = {
      invalidForm: true,
      formData: {
        name: '',
        date: '',
        reminder: ''
      }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddReminder(this.state.formData.reminder)
  };

  handleChange = (e) => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  handleText = () => {
    fetch('/api/twilio')
  }

  render() {
    return (
      <div className="BirthdayReminder">
        <header className="header-footer"><i className="fas fa-gifts"></i>Birthday Reminder</header>
        <form ref={this.formRef} onSubmit={this.handleSubmit} className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <label>Name: </label>&nbsp;&nbsp;&nbsp;
              <input 
                className="form-control" 
                placeholder="Whose Birthday" 
                name="name" 
                value={this.state.formData.name} 
                onChange={this.handleChange}
                required
             />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>Date: </label>&nbsp;&nbsp;&nbsp;
              <input 
              className="form-control" 
              type="date" 
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
        <button onClick={this.handleText}>Text</button>
        {/* <section>
        <p>{this.state.name}</p>
        <p>{this.state.date}</p>
        <p>{this.state.reminder}</p>
        </section> */}
      </div>
    );
  }
}

export default BirthdayReminder;
