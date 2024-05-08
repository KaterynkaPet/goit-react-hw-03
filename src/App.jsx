import { useState } from 'react'
import ContactForm from './components/contact_form/ContactForm'
import SearchBox from './components/search_box/SearchBox'
import ContactList from './components/contact_list/ContactList'
import Contact from './contact/Contact'
import contactList from './contactList.json'

const App = () => {
  const [contacts, setContacts] = useState(contactList);
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deletContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filterContactsByName = (name) => {
    setSearchTerm(name);
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filterContactsByName={filterContactsByName} />
      <ContactList contacts={filteredContacts} deletContact={deletContact} />
    </div>
  )
}

export default App;
