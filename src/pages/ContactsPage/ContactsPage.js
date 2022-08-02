import ContactsForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from './ContactsPage.module.css';


const ContactsPage = () => { 

  return (
      <section className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactsForm />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
     
  );
};

export default ContactsPage;