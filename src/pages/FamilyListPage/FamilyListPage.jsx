import React from 'react';
import FamilyMemberCard from '../../components/FamilyMemberCard/FamilyMemberCard'

function FamilyListPage(props) {
  return (
    <>
      <h1>List of Family Members</h1>
      <div className='FamilyListPage-grid'>
        {props.people.map(person =>
          <FamilyMemberCard
            key={person._id}
            person={person}
            handleDeletePerson={props.handleDeletePerson}
          />
        )}
      </div>
    </>
  );
}

export default FamilyListPage;