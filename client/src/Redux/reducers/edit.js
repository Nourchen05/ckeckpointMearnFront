import { TOGGLE_ADD, TOGGLE_EDIT } from "../actionTypes/edit";

const initialState = {
  edit: false,
};
const EditReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_ADD:
      return { ...state, edit: false };
    case TOGGLE_EDIT:
      return { ...state, edit: true };
    default:
      return state;
  }
};
export default EditReducer;
