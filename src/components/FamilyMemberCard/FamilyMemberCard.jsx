import React from 'react';
import {Link} from 'react-router-dom';

function FamilyMemberCard({person, handleDeletePerson}) {
  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>{person.name}</h3>
      </div>
      <div className='panel panel-body'>
        <dl>
          <dt>Email</dt>
          <dd>{person.email}</dd>
          <dt>Phone</dt>
          <dd>{person.phone}</dd>
          <dt>Birthday</dt>
          <dd>{person.birthday}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {person}
          }}
        >
          Edit
        </Link>
        <button
          className='btn btn-xs btn-danger'
          onClick={() => handleDeletePerson(person._id)}
          >
            Delete
          </button>
      </div>
    </div>
  );
}

export default FamilyMemberCard;