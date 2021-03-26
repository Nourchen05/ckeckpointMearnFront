import { TOGGLE_EDIT } from "../actionTypes/edit";

import { TOGGLE_EDIT, TOGGLE_ADD } from "../actionTypes/edit";

export const toggleEdit = () => {
  return {
    type: TOGGLE_EDIT,
  };
};

export const toggleAdd = () => {
  return {
    type: TOGGLE_ADD,
  };
};
