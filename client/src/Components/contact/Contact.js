import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/actions/contact";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(toggleEdit);
  };
  return (
    <div>
      <h2>{contact.name}</h2>
      <h2>{contact.email}</h2>
      <h2>{contact.phone}</h2>
      <button onClick={handleClick}>Edit</button>
      <button onClick={() => dispatch(contact._id)}>Delete</button>
    </div>
  );
};

export default Contact;
