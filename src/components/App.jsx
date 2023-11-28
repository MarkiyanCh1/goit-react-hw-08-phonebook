import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { selectError, selectisLoading } from 'redux/selectors';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { operationFetchContacts } from 'redux/operations';

const App = () => {
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationFetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          margin: '0 auto',
          padding: '30px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {error && <Error />}
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default App;
