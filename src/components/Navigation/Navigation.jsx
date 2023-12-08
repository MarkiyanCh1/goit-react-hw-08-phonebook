import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/selectors';
// import { IconContext } from 'react-icons';
import { NavHeader, LoginContainer, LinkLayout } from './Navigation.styles';

const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <header style={{ backgroundColor: '#19d23a' }}>
      <NavHeader>
        <LinkLayout to="/">Home</LinkLayout>
        <LoginContainer>
          {isAuth ? (
            <>
              <LinkLayout to="/contacts">Contacts</LinkLayout>
            </>
          ) : (
            <>
              <LinkLayout to="/register">Register</LinkLayout>
              <LinkLayout to="/login">Login</LinkLayout>
            </>
          )}
        </LoginContainer>
      </NavHeader>
    </header>
  );
};

export default Navigation;
