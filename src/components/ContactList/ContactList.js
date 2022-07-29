import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/contacts-operations';
import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';
import { ContactItem } from './ContactItem';


const ContactList = () => {
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  

  const getNormalizedItem = () => {
    const  normalizedFilter = filter.toLowerCase().trim();
    return items.filter(item => item.name.toLowerCase().includes(normalizedFilter))
  }
  const contacts = getNormalizedItem()

    return (
      <ul className={s.contactsList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
            />
          );
        })}
      </ul>
    );
  };
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };
  
  export default ContactList;