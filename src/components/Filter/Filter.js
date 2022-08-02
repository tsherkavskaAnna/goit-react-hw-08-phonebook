import React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filter-slice';
import s from "../ContactForm/ContactForm.module.css"


const Filter = () => { 
  const dispatch =useDispatch();
  const filter = useSelector(state => state.filter)


  const onFilter = event => dispatch(changeFilter(event.target.value))


return (
<div className={s.field}>
      <TextField
        label=" Find contacts by name"
        type="search"
        variant="filled"
        value={filter}
        onChange={onFilter}
        sx={{ width: 400 }}
      />
    </div>
 );
}


export default Filter
