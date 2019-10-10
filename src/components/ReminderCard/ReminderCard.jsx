import React from 'react';
import {Link} from 'react-router-dom';

function ReminderCard({reminder, handleDeleteReminder}) {
  return (
    <div className='panel panel-default'>
      <div className='panel panel-body'>
        <dl>
          <dt>Date</dt>
          <dd>{reminder.date}</dd>
          <dt>Reminder Message</dt>
          <dd>{reminder.reminders}</dd>
        </dl>
      </div>
      <div clasName='panel-footer'>
        <Link 
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/myprofile',
            state: {reminder}
          }}
        >
          <button>EDIT</button>
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteReminder(reminder._id)}  
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ReminderCard;