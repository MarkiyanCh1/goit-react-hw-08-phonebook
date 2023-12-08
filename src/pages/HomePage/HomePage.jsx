import React from 'react';
import Phonebook from 'images/phonebook.png';
import { NavLink } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Container, MainText, TextLink } from './HomePage.styles';

const HomePage = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Container>
      <h1 style={{ fontSize: "50px"}}>Welcome to your Phone book!</h1>
      <NavLink to={'/login'}>
        <img
          className="heartbeat"
          src={Phonebook}
          alt="phonebook"
          width={250}
        />
      </NavLink>
      {!isAuth ? (
        <MainText>
          Already have an account?
          <TextLink to={'/login'}>
            Sign In
          </TextLink>
          or
          <TextLink to={'/register'}>
            Register.
          </TextLink>
        </MainText>
      ) : (
        ''
      )}
    </Container>
  );
};

export default HomePage;
