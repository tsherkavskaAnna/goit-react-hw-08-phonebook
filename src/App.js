import ContactList from './components/ContactList/ContactList';
import ContactsForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

function App() {
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList
      />
    </div>
  );
}

export default App;
