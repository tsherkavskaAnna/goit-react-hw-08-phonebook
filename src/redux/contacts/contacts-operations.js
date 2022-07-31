import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk(
    'contacts/getContactsThunk',
    async () => {
        try {
            const { data } = await axios.get('.contacts')
            return data;
        }
        catch (error) {
            toast.error('Something went wrong!')
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async newContact => {
        try {
            const contact = await axios.post('/contacts', newContact);
            toast.success(`Contact ${contact.name} added`);
            return contact.data;
        } catch (error) {
            toast.error('Something went wrong!');
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async contactId => {
        try {
            await axios.delete(`/contacts/${contactId}`)
            toast.success(`Contact ${contactId} deleted`);
        } catch (error) {
            toast.error('Something went wrong!');
        }
    }
)