import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { NavBar } from '../shared/NavBar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { messages } from '../../helpers/calendarMessages';
import { eventClear, eventSelect } from '../../actions/events';
import { AddNewFab } from '../shared/AddNewFab';
import { DeleteFab } from '../shared/DeleteFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarPage = () => {

  const dispatch = useDispatch();
  const { events } = useSelector(state => state.calendar);
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = () => {
    dispatch(uiOpenModal());
  }

  const onSelect = (e) => {
    dispatch(eventSelect(e));
  }

  const onView = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  const eventPropGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#002D8D',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }

    return {
      style
    }
  }

  const onSelectSlot = (e) => {
    dispatch(eventClear());
  }

  return (
    <div className="calendar-screen">
      <NavBar />
      <div className="container-fluid">
        <CalendarModal />
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventPropGetter}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelect}
          onSelectSlot={onSelectSlot}
          selectable={true}
          onView={onView}
          view={lastView}
          components={{
            event: CalendarEvent
          }}
        />
        
      </div>

      <DeleteFab />
      <AddNewFab />
    </div>
  )
}
