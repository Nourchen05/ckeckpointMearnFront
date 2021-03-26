import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../Redux/actions/contact";
import Contact from "../Components/contact/Contact";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactReducer.contactList);
  const loadContact = useSelector((state) => state.contactReducer.loadContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div>
      {loadContact ? (
        <h2>Snipper</h2>
      ) : (
        contactList.map((el) => <Contact contact={el} key={el._id} />)
      )}
    </div>
  );
};

export default ContactList;
