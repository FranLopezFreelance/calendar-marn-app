import moment from 'moment';

const initialState = {
  events: [
    {
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
  activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}