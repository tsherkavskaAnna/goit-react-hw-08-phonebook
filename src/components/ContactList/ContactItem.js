import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import s from './ContactList.module.css';


export const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();


  return (
    <li className={s.contactsItem}>
      <p className={s.itemName}>{name}</p>
      <p className={s.itemName}>{number}</p>
      <button
        className={s.btnDelete}
        type="button"
        onClick={() => (deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};