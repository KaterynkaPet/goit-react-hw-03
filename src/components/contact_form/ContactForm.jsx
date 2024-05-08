import { useState } from 'react';
//import ContactForm from './ContactForm.module.css'

const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !number.trim()) return;
        addContact({ id: Date.now(), name, number });
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='nameInput'>Name</label>
                <input
                    type='text'
                    name='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
            />
            </div>
            
            <div>
                <label htmlFor='numberInput'>Number</label>
                <input
                    type='number'
                    name='Number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            
            <button type='submit'>Add contact</button>
        </form>
    )
}
export default ContactForm;