import moment from 'moment';
import { types } from '../types/types';

const initialState = {
  events: [
    {
      id: new Date().getTime(),
      title: 'Cumpleaños de Pedro',
      start: moment().subtract(4, 'hours').toDate(),
      end: moment().subtract(1, 'hours').toDate(),
      notes: 'Comprar el wiskie',
      user: {
        _id: 102,
        name: 'Francisco'
      }
    }
  ],
  selectedEvent: null
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSelect:
      return {
        ...state,
        selectedEvent: action.payload
      }
    case types.eventClear:
      return {
        ...state,
        selectedEvent: null
      }
    case types.eventAdd:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      }
      case types.eventEdit:
        return {
          ...state,
          events: state.events.map(
            e => (e.id === action.payload.id) ? action.payload : e
          )
        }
      case types.eventDelete:
        return {
          ...state,
          events: state.events.filter(
            e => e.id !== state.selectedEvent.id
          ),
          selectedEvent: null
        }
    default:
      return state;
  }
}