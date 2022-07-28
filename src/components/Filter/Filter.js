import React from 'react';
import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';

const Filter = () => { 
  const dispatch =useDispatch();
  const onFilter = event => dispatch(getFilter(event.target.value))


return (
<label>
    Find contacts by name
    <br />
    <input type="text" onChange={onFilter} />
  </label>
 );
}


export default Filter
