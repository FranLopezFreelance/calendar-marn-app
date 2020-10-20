import { types } from "../types/types";

export const eventAdd = (event) => ({
  type: types.eventAdd,
  payload: event
});

export const eventSelect = (event) => ({
  type: types.eventSelect,
  payload: event
});

export const eventClear = () => ({ type: types.eventClear });

export const eventEdit = (event) => ({
  type: types.eventEdit,
  payload: event
});

export const eventDelete = () => ({ type: types.eventDelete });