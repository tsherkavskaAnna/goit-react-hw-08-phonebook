import React from 'react';
import { changeFilter } from 'redux/itemSlice';
import { useDispatch } from 'react-redux';

const Filter = () => { 
  const dispatch =useDispatch();


return (
<label>
    Find contacts by name
    <br />
    <input type="text" onChange={event => dispatch(changeFilter(event.target.value))} />
  </label>
 );
}


export default Filter
