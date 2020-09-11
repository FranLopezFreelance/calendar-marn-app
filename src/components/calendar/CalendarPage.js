import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { NavBar } from '../shared/NavBar';
import { messages } from '../../helpers/calendarMessages';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';


moment.locale('es');

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const events = [{
  title: 'Cumpleaños de Pedro',
  start: moment().subtract(4, 'hours').toDate(),
  end: moment().subtract(2, 'hours').toDate(),
  notes: 'Comprar el wiskie',
  user: {
    _id: 102,
    name: 'Francisco'
  }
}]

export const CalendarPage = () => {

  const eventPropGetter = (event, start, end, isSelected) => {
    console.log(event, start, end, isSelected);
    const style = {
      backgroundColor: '#59B086',
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
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventPropGetter}
          components={{
            event: CalendarEvent
          }}
        />
      </div>
    </div>
  )
}
