import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { NavBar } from '../shared/NavBar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { messages } from '../../helpers/calendarMessages';

moment.locale('es');

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const events = [{
  title: 'Cumpleaños de Pedro',
  start: moment().subtract(4, 'hours').toDate(),
  end: moment().subtract(1, 'hours').toDate(),
  notes: 'Comprar el wiskie',
  user: {
    _id: 102,
    name: 'Francisco'
  }
}]

export const CalendarPage = () => {

  const dispatch = useDispatch();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = () => {
    dispatch(uiOpenModal());
  }

  const onSelect = (e) => {
    console.log(e);
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
          onView={onView}
          view={lastView}
          components={{
            event: CalendarEvent
          }}
        />
        
      </div>
    </div>
  )
}
