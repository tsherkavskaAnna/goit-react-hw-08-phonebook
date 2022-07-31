import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import s from './ContactList.module.css';


export const ContactItem = ({ contactId, name, number }) => {
  const dispatch = useDispatch();
 
  const onDelete = contactId => dispatch(contactsOperations.deleteContact(contactId))

  return (
    <li className={s.contactsItem}>
      <p className={s.itemName}>{name}</p>
      <p className={s.itemName}>{number}</p>
      <button
        className={s.btnDelete}
        type="button"
        onClick={() => onDelete(contactId)}
      >
        Delete
      </button>
    </li>
  );
};