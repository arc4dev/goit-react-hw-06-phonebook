import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

//App
function App() {
  const [filter, setFilter] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  //   getLocalStorage();
  // }, []);

  // useEffect(() => {
  //   if (!isMounted) return;

  //   setLocalStorage();
  // }, [contacts]);

  // const getLocalStorage = () => {
  //   const contactsArr = JSON.parse(localStorage.getItem('contacts'));

  //   if (!contactsArr) return;

  //   setContacts(contactsArr);
  // };

  // const setLocalStorage = () => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
