import { types } from "../types/types"

export const eventAdd = (event) => ({
  type: types.eventAdd,
  payload: event
});

export const eventSelect = (event) => ({
  type: types.eventSelect,
  payload: event
});

export const eventEdit = (event) => ({
  type: types.eventEdit,
  payload: event
});