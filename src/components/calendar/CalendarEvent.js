import React from 'react';

export const CalendarEvent = ({event}) => {
  
  const {title, user } = event;
  return (
    <div>
      <div>{title}</div>
      <strong>{user.name}</strong>
    </div>
  )
}
