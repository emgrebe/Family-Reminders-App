import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './AddFamilyPage.css';

class AddFamilyPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      email: '',
      phone: '',
      birthday: Date
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddPerson(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <div className='AddFamilyPage'>
        <header className="header-footer">Add Family Member</header>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit} className="form-horizontal">
          <div className="col-sm-12">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="col-sm-12">
            <label>Email</label>
            <input
              className="form-control"
              name="email"
              value={this.state.formData.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="col-sm-12">
            <label>Phone</label>
            <input
              className="form-control"
              name="phone"
              value={this.state.formData.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-sm-12">
            <label>Birthday</label>
            <input
              className="form-control"
              name="birthday"
              value={this.state.formData.birthday}
              onChange={this.handleChange}
            />
          </div>
          <div className='nav-btn-default'>
          <NavLink className='navLink' exact to='/familyInfo'>Add Family Member</NavLink>
          <NavLink className='navLink' exact to='/familyInfo'>Back</NavLink>
          </div>
        </form>
      </div>
    );
  }
}
export default AddFamilyPage;