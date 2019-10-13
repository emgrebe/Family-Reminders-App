import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BirthdayReminder.css';

class BirthdayReminder extends Component {
  state = {
      formData: {
        name: '',
        date: '',
        reminder: ''
      }
  };

  handleText = () => {
    fetch('/api/twilio', {
      method: "POST",
      headers : {
        "content-type" : "application/json"
      },
      body: JSON.stringify({msg:this.state.formData.reminder})
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.handleAddReminder(this.state.formData)
    this.handleText()
    this.props.history.push('/myprofile')
  };

  handleChange = (e) => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData
    });
  };


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
                <button
                  className='btn-default'
                >
                  SUBMIT
                </button>
              &nbsp;&nbsp;&nbsp;
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

export default BirthdayReminder;
