import React from 'react';

function ReminderCard({reminder, handleDeleteReminder}) {
  return (
    <div className='panel panel-default'>
      <div className='panel panel-body'>
        <dl>
          <dt>Date</dt>
          <dt>Reminder Message</dt>
        </dl>
      </div>
      <div className='panel-footer'>
        <button>DELETE</button>
      </div>
    </div>
  );
}

export default ReminderCard;