import { useEffect, useState } from 'react'
import ContactForm from './components/contact_form/ContactForm'
import SearchBox from './components/search_box/SearchBox'
import ContactList from './components/contact_list/ContactList'
import Contact from './contact/Contact'


const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
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
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  )
}

export default App;
