import React, { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts/contacts-slice';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = nanoid();

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break

        default:
    }
    return;
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    const newContact = {
      id,
      name,
      number,
    };

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      toast.warning('Name is already in contacts list!')
    } else {
      addContact(newContact)
      toast.success('New contact is added a phonebook')
    }
    reset();
  }


  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button
        type="submit"
        disabled={!name || !number}
        className={s.btnAdd}
      >
        Add Contact
      </button>
      <ToastContainer />
    </form>
  );
};

ContactsForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactsForm;
