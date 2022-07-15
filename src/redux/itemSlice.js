import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'contacts', 
    initialState: {
        items: [],
        filter: '',

    reducers: {
        addContact: (state, { payload }) => {
            state.items.push(payload);
        },
        deleteContact: (state, { payload }) => { 
            state.items = state.items.filter(({ id }) => id !== payload);        },
        },
        changeFilter: (state, { payload }) => {
            state.filter = payload;
        },
    }
});

      
export const { addContact, deleteContact, changeFilter } =  contactSlice.actions;