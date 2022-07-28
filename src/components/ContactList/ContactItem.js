import { useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import contactsOperations from 'redux/contacts/contacts-operations';


export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  
  const onDelete = id => dispatch(contactsOperations.deleteContact(id))

  return (
    <li className={s.contactsItem}>
      <p className={s.itemName}>{name}</p>
      <p className={s.itemName}>{number}</p>
      <button
        className={s.btnDelete}
        type="button"
        onClick={() => dispatch(onDelete(id))}
      >
        Delete
      </button>
    </li>
  );
};