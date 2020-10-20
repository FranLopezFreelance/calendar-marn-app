import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { eventDelete } from '../../actions/events';

export const DeleteFab = () => {

  const dispatch = useDispatch();
  const selectedEvent = useSelector(state => state.calendar.selectedEvent);
  const {modalOpen} = useSelector(state => state.ui);

  const handleClick = () => {
    dispatch(eventDelete());
  }

  return (
    (selectedEvent && !modalOpen) ?
      <button className="btn-danger fab-danger"
      onClick={handleClick}>
        <i className="fas fa-trash"></i>
        <span> Borrar Evento</span>
      </button>
    : null
  )
}
