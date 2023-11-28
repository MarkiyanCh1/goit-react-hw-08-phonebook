import React from 'react';
import { List, ContactItem } from './ContactList.styles';
import ContactCard from '../ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { selectVisiableContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisiableContacts);

  return (
    <List>
      {contacts.map(item => (
        <ContactItem key={item.id}>
          <ContactCard contact={item} />
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
