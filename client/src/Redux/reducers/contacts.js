//import types
import {
  GET_CONTACTS,
  LOAD_CONTACT,
  FAIL_CONTACT,
} from "../actionTypes/contact";

//initialisation
const initialState = {
  contactList: [],
  loadContact: false,
  errors: null,
};
//pure function
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, loadContact: true };
    case GET_CONTACTS:
      return { ...state, contactList: payload.contacts, loadContact: false };
    case FAIL_CONTACT:
      return { ...state, loadContact: false, errors: payload };
    default:
      break;
  }
};
//export
export default contactReducer;
