import React from 'react';
import { Formik } from 'formik';
import { Form } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Title,
  FormContainer,
  FormEl,
  InputContainer,
  Input,
  InputText,
  ErrMessage,
  FormButton,
} from './ContactForm.styles';
// import { ButtonClose } from '../ContactCard/ContactCard.styles';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { operationAddContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

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
        addNewContact(values, id);
        actions.resetForm({
          values: {
            name: '',
            number: '',
            id: nanoid(),
          },
        });
      }}
    >
      <Container>
        <Title>Add new contact</Title>
        <Form>
          <FormContainer>
            <FormEl>
              <label>
                <InputContainer>
                  <Input name="name" required placeholder="" />
                  <InputText>Name*</InputText>
                  <ErrMessage name="name" component="div" />
                </InputContainer>
              </label>
            </FormEl>

            <FormEl>
              <label>
                <InputContainer>
                  <Input name="number" placeholder="" type="text" />
                  <InputText>Phone number*</InputText>
                  <ErrMessage name="number" component="div" />
                </InputContainer>
              </label>
            </FormEl>
          </FormContainer>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Container>
    </Formik>
  );
};

export default ContactForm;
