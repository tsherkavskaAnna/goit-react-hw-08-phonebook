import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filter-slice';


const Filter = () => { 
  const dispatch =useDispatch();
  const filter = useSelector(state => state.filter)


  const onFilter = event => dispatch(changeFilter(event.target.value))


return (
<label>
    Find contacts by name
    <br />
    <input 
    type="text" 
    value={filter}
    onChange={onFilter} />
  </label>
 );
}


export default Filter
