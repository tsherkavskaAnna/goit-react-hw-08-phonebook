import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { getFilter, getItems } from 'redux/itemSelectors';

const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  

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