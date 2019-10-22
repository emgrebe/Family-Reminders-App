import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import './FamilyInfo.css';
import * as FamilyMember from '../utils/familyMember';
import FamilyListPage from '../FamilyListPage/FamilyListPage';
import AddFamilyPage from '../AddFamilyPage/AddFamilyPage';
import EditFamilyPage from '../EditFamilyPage/EditFamilyPage';

class FamilyInfo extends React.Component {
  state = {
    people: []
  };

  handleAddPerson = async newPersonData => {
    const newPerson = await FamilyMember.create(newPersonData);
    this.setState(state => ({
      people: [...state.people, newPerson]
    }), () => this.props.history.push('/familyInfo'));
  }

  handleUpdatePerson = async updatedPersonData => {
    const updatedPerson = await FamilyMember.update(updatedPersonData);
    const newPeopleArray = this.state.people.map(p => 
      p._id === updatedPerson._id ? updatedPerson : p
    );
    this.setState(
      {people: newPeopleArray},
      () => this.props.history.push('/')
    );
  }

  handleDeletePerson= async id => {
    await FamilyMember.deleteOne(id);
    this.setState(state => ({
      people: state.people.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink exact to='/add'>Add Family Member</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path='/familyInfo' render={({history}) => 
            <FamilyListPage
              people={this.state.people}
              handleDeletePerson={this.handleDeletePerson}
            />
          } />

          <Route exact path='/add' render={() => 
            <AddFamilyPage
              handleAddPerson = {this.handleAddPerson}
            />
          } />

          <Route exact path='/edit' render={({history, location}) => 
            <EditFamilyPage
              handleUpdatePerson={this.handleUpdatePerson}
              location={location}
            />
          } />

        </main>
      </div>
    );
  }
}
  
export default FamilyInfo;