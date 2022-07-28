import axios from "axios";

import {
    fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data))
    } catch (error) {
        dispatch(fetchContactsError(error.message));
    }
};

const addContact = (name, number) => async dispatch => {
    const contacts = { name, number };
    dispatch(addContactsRequest());
    try {
        const { data } = await axios.post('/contacts', contacts);
        dispatch(addContactsSuccess(data))
    } catch(error) {
        dispatch(addContactsError(error.message))
    }
};

const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactsRequest());
    try {
        await axios.delete(`/contacts/${contactId}`);
        dispatch(deleteContactsSuccess(contactId));
    } catch(error) {
        dispatch(deleteContactsError(error.message));
    }
};

const contactsOperations = {
    fetchContacts,
    addContact,
    deleteContact,
};

export default contactsOperations;
