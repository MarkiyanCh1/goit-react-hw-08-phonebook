import React from 'react';
import { CardWrapper, ButtonClose, InfoWrapper, Name, Phone } from './ContactCard.styles';
import { useDispatch } from 'react-redux';
import { operationDeleteContact } from 'redux/operations';

const ContactCard = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <CardWrapper>
    <InfoWrapper>
      <Name>{name}</Name>
      <Phone>{number}</Phone>
    </InfoWrapper>
      <ButtonClose onClick={() => dispatch(operationDeleteContact(id))}>Delete</ButtonClose>
    </CardWrapper>
  );
};

export default ContactCard;
