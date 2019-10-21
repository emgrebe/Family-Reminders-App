import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditFamilyPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.person
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdatePerson(this.state.formData);
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
      <>
        <h1>Edit Family Member</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Person's Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Person's Email (required)</label>
            <input
              className="form-control"
              name="email"
              value={this.state.formData.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Person's Phone</label>
            <input
              className="form-control"
              name="phone"
              value={this.state.formData.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Person's Birthday</label>
            <input
              className="form-control"
              name="birthday"
              value={this.state.formData.birthday}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            Save Family Member
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}
export default EditFamilyPage;
