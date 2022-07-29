import { createSlice } from "@reduxjs/toolkit";
import {
    getContactsThunk,
    addContactThunk,
    deleteContactThunk,
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
        [getContactsThunk.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [getContactsThunk.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [getContactsThunk.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        [addContactThunk.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
        },
        [addContactThunk.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [addContactThunk.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        [deleteContactThunk.fulfilled]: state => {
            state.isLoading = false;
            state.error = null;
        },
        [deleteContactThunk.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteContactThunk.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const { filterContact } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;