import React from 'react';

function FamilyCard({reminder, date}) {
  return (
    <div className='panel panel-default'>
      <div className='panel panel-body'>
        <dl>
          <dt>Name{name}</dt>
          <dt>Email {email}</dt>
          <dt>Phone Number {phone}</dt>
          <dt>Birthday {birthday}</dt>
        </dl>
      </div>
      <div className='panel-footer'>
        <button>DELETE</button>
      </div>
    </div>
  );
}

export default ReminderCard;