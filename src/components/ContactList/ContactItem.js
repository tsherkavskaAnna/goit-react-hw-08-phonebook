import s from './ContactList.module.css';

export const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <li className={s.contactsItem}>
      <p className={s.itemName}>{name}</p>
      <p className={s.itemName}>{number}</p>
      <button
        className={s.btnDelete}
        type="button"
        id={id}
        onClick={event => {
          onDeleteContact(event.target.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
