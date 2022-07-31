import { createSlice } from "@reduxjs/toolkit";
import {
    getContacts,
    addContact,
    deleteContact,
} from './contacts-operations';

const initialState = {
    items: [],
    filter: '',
    isLoading: true,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,

    reducers: {
        filterContact: (state, action) => {
            state.filter = action.payload;
        }
    },

    extraReducers: {
        [getContacts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [getContacts.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [getContacts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        [addContact.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
        },
        [addContact.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [addContact.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        [deleteContact.fulfilled]: state => {
            state.isLoading = false;
            state.error = null;
        },
        [deleteContact.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteContact.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const { filterContact } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;