import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
  } from './contacts-actions';

  const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
  
    try {
      const { data } = await axios.get('/contacts');
      dispatch(fetchContactsSuccess(data));
      console.log(data)
    } catch (error) {
      dispatch(fetchContactsError(error.message));
      toast.error('Error')
    }
  };
  
  const addContact = (name, number) => async dispatch => {
    const contact = { name, number };
  
    dispatch(addContactRequest());
  
    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error.message));
      toast.error('Something went wrong! try again!');
    }
  };
  
  const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest());
  
    try {
      await axios.delete(`/contacts/${contactId}`);
      dispatch(deleteContactSuccess(contactId));
    } catch (error) {
      dispatch(deleteContactError(error.message));
      toast.error('Something went wrong! try again!');
    }
  };
  
  const contactsOperations = {
    fetchContacts,
    addContact,
    deleteContact,
  };
  
  export default contactsOperations;