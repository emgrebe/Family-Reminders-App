import React from 'react';
import {NavLink} from 'react-router-dom';
import FamilyMemberCard from '../../components/FamilyMemberCard/FamilyMemberCard'

function FamilyListPage(props) {
  return (
    <>
      <header className='header-footer'>List of Family Members</header>
      <div className='FamilyListPage-grid'>
        {props.people.map(person =>
          <FamilyMemberCard
            key={person._id}
            person={person}
            handleDeletePerson={props.handleDeletePerson}
          />
        )}
        <div className='nav-btn-default'>
        <NavLink className='navLink' exact to='/add'>Add Family Member</NavLink>
        <NavLink className = 'navLink' exact to='/'>Back</NavLink>
        </div>
      </div>
    </>
  );
}

export default FamilyListPage;