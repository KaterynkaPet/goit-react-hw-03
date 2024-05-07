import { useState } from 'react'
import ContactForm from './components/contact_form/ContactForm'
import SearchBox from './components/search_box/SearchBox'
import ContactList from './components/contact_list/ContactList'
import './App.css'

function App() {


  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
        
    </>
  )
}

export default App
