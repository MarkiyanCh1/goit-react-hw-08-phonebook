import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, StyledForm, Input } from './ContactForm.styles';
import { ButtonClose } from '../ContactCard/ContactCard.styles';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { operationAddContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name format'
    )
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required!'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[ .\\-\s]?\(?\d{1,3}?\)?[ .\\-\s]?\d{1,4}[ .\\-\s]?\d{1,4}[ .\\-\s]?\d{1,9}$/,
      'Invalid number format'
    )
    .min(8, 'Too Short!')
    .required('This field is required!'),
});

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    const hasContact = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    const finalContact = {
      ...newContact,
    };
    dispatch(operationAddContact(finalContact));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        id: nanoid(),
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions, id) => {
        addNewContact(values, id)
        actions.resetForm({
          values: {
            name: '',
            number: '',
            id: nanoid(),
          },
        });
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <Input name="name" placeholder="Please enter your name" />
        <ErrMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Input
          name="number"
          placeholder="Please enter your number"
          type="text"
        />
        <ErrMessage name="number" component="div" />

        <ButtonClose type="submit">Add contact</ButtonClose>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
