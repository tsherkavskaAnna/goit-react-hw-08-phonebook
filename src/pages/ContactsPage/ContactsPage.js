import { useDispatch } from 'react-redux';
import ContactsForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from './ContactsPage.module.css'
import contactsOperations from 'redux/contacts/contacts-operations';

export default function ContactsPage() {
  const dispatch = useDispatch();

  dispatch(contactsOperations.fetchContacts());
console.log(contactsOperations.fetchContacts())
  return (
    <main>
      <section className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactsForm />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </main>
  );
}