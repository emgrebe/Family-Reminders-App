import React from 'react';
import {Link} from 'react-router-dom';
import './FamilyInfo.css'
;
class FamilyInfo extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    birthday: Date
  };

  render() {
    return (
      <div className="FamilyInfo">
        <header className="header-footer"><i className="fas fa-users"></i>Family Info</header>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <span className="txt">Name: </span>&nbsp;&nbsp;&nbsp;
              <input type="name" className="form-control" placeholder="Name" value={this.state.name} name="name" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span className="txt">Email: </span>&nbsp;&nbsp;&nbsp;
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span className="txt">Phone: </span>&nbsp;&nbsp;&nbsp;
              <input type="phone" className="form-control" placeholder="Phone Number" value={this.state.phone} name="phone" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span className="txt">Birthday: </span>&nbsp;&nbsp;&nbsp;
              <input type="date" className="form-control" placeholder="Birthday" value={this.state.birthday} name="birthday" />
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
    )};
  } 


export default FamilyInfo;