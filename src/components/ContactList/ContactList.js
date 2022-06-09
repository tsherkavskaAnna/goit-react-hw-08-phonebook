import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactsItem}>
          {name}: {number}
          <button
            className={s.btnDelete}
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
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
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
