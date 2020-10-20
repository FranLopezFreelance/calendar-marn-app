import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

  const dispatch = useDispatch();
  const {modalOpen} = useSelector(state => state.ui);
  
  const handleClick = () => {
    dispatch(uiOpenModal());
  }

  return (
    (!modalOpen)?
      <button
        onClick={handleClick}
        className="btn btn-primary fab">
        <i className="fas fa-plus"></i>
      </button>
    : null
  )
}
