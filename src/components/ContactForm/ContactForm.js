import React, { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts/contacts-slice';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = nanoid();

  const { data } = useGetContactsQuery();
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
  
    if (
      data.find(
        contact => contact.name.toLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contact`);
    }
    addContact({ newContact });
    toast.success('Contact added!');
  //   if (data.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
  //     toast.warning('Name is already in contacts list!')
  //   } else {
  //     addContact(newContact)
  //     toast.success('New contact is added a phonebook')
  //   }
   reset();
  }


  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} action="submit" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          sx={{ mb: '15px' }}
        />
        <TextField
          label="Number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          autoComplete="Number"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          sx={{ mb: '15px' }}
        />

        <div className={s.button}>
          <Button type="submit" variant="contained" size="medium">
            Add Contact
          </Button>
        </div>
      </form>
    </>
    
  );
};

ContactsForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactsForm;
