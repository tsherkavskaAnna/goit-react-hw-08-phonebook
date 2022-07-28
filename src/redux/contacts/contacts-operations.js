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



const addContact = ({name, number}) => dispatch => {
    const contact = {
        name,
        number
    };

    dispatch(addContactsRequest());
    axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error.message)))
};


const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data))
    } catch (error) {
        dispatch(fetchContactsError(error.message));
    }
};

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactsRequest());
    
    axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSuccess(contactId)))
    .catch(error => dispatch(deleteContactsError(error.message)))
}

const contactsOperations = {
    fetchContacts,
    addContact,
    deleteContact,
};

export default contactsOperations;
