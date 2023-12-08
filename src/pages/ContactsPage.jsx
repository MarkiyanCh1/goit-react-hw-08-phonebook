import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { useDispatch, useSelector } from 'react-redux';
import { operationFetchContacts } from 'redux/contacts/operations';
import { selectisLoading } from 'redux/contacts/selectors';
import { selectError } from 'redux/contacts/selectors';
import { PageContainer, PageTitle, FormContainer, ListContainer, Title } from './ContactsPage.styles';

const ContactsPage = () => {
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationFetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}

      <PageContainer>
        <PageTitle>Phonebook</PageTitle>
        <div style={{ display: 'flex', gap: '5px' }}>
          <FormContainer>
            <ContactForm />
          </FormContainer>
          <ListContainer>
            <Title>Contacts</Title>
            <Filter />
            <ContactList />
          </ListContainer>
        </div>
      </PageContainer>
    </>
  );
};

export default ContactsPage;
