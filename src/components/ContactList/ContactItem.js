import { useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import { deleteContact } from 'redux/itemSlice';


export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  

  return (
    <li className={s.contactsItem}>
      <p className={s.itemName}>{name}</p>
      <p className={s.itemName}>{number}</p>
      <button
        className={s.btnDelete}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};