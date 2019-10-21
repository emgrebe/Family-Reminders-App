import React, {Component} from 'react';

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
      <>
        <h1>Add Family Member</h1>
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
            className="btn"
            disabled={this.state.invalidForm}
          >
            Add Family Member
          </button>
        </form>
      </>
    );
  }
}
export default AddFamilyPage;