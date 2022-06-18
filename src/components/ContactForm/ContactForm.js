import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactsForm = ({ onSubmit }) => {
  const [inputValues, setInputValues] = useState({
    name: '',
    number: '',
  });

  const handleChange = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValues);
    reset();
  };

  const reset = () => {
    setInputValues({ name: ``, number: `` });
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
          value={inputValues.name}
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
          value={inputValues.number}
          onChange={handleChange}
        />
      </label>

      <button
        type="submit"
        disabled={!inputValues.name || !inputValues.number}
        className={s.btnAdd}
      >
        Add Contact
      </button>
    </form>
  );
};

ContactsForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactsForm;
