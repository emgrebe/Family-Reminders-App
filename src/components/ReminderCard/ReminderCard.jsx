import React from 'react';

function ReminderCard({reminder, date}) {
  return (
    <div className='panel panel-default'>
      <div className='panel panel-body'>
        <dl>
          <dt>Date{date}</dt>
          <dt>Reminder Message { reminder }</dt>
        </dl>
      </div>
      {/* <div className='panel-footer'>
        <button>DELETE</button>
      </div> */}
    </div>
  );
}

export default ReminderCard;