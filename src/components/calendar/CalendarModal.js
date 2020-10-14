import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'white'
  }
};

Modal.setAppElement('#root');
const startDateDefault = moment().minutes(0).seconds(0).add(1, 'hours');
const endDateDefault = startDateDefault.clone().add(1, 'hours');

export const CalendarModal = () => {

  const {modalOpen} = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(startDateDefault.toDate());
  const [endDate, setEndDate] = useState(endDateDefault.toDate());
  const [validTitle, setvalidTitle] = useState(true);

  const [formValues, setFormValues] = useState({
    title: 'Nuevo evento',
    notes: '',
    start: startDateDefault.toDate(),
    end: endDateDefault.toDate()
  });

  const {title, notes, start, end} = formValues;

  const onStartDateChange = (e) => {
    setStartDate(e);
    setFormValues({
      ...formValues,
      start: e
    });
  }

  const onEndDateChange = (e) => {
    setEndDate(e);
    setFormValues({
      ...formValues,
      end: e
    });
  }

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);

    if(momentStart.isSameOrAfter(momentEnd)){
      return Swal.fire('Error', 'Campo fin debe ser mayor a campo inicio', 'error');
    }
    if(title.trim().length < 2){
      return setvalidTitle(false);
    }
    setvalidTitle(true);
    closeModal();
  }

  const closeModal = () => {
    dispatch(uiCloseModal());
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h4> Nuevo evento </h4>
      <hr />
      <form 
        className="container"
        onSubmit={handleSubmit}>

          <div className="form-group">
              <label>Fecha y hora inicio</label>
              <DateTimePicker
                onChange={onStartDateChange}
                value={startDate}
                className="form-control"
              />
          </div>

          <div className="form-group">
              <label>Fecha y hora fin</label>
              <DateTimePicker
                onChange={onEndDateChange}
                value={endDate}
                minDate={startDate}
                className="form-control"
              />
          </div>

          <hr />
          <div className="form-group">
              <label>Titulo y notas</label>
              <input 
                  type="text" 
                  className={`form-control ${ !validTitle && 'is-invalid'}`}
                  placeholder="Título del evento"
                  name="title"
                  autoComplete="off"
                  value={title}
                  onChange={handleInputChange}
              />
              <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
          </div>

          <div className="form-group">
              <textarea 
                  type="text" 
                  className="form-control"
                  placeholder="Notas"
                  rows="5"
                  name="notes"
                  value={notes}
                  onChange={handleInputChange}
              ></textarea>
              <small id="emailHelp" className="form-text text-muted">Información adicional</small>
          </div>

          <button
              type="submit"
              className="btn btn-outline-primary btn-block"
          >
              <i className="far fa-save"></i>
              <span> Guardar</span>
          </button>

      </form>
    </Modal>
  )
}
