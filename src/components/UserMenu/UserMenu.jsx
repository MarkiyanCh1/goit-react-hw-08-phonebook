import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operationUserLogout } from 'redux/auth/operations';

import { BiUserCheck } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { selectUserName } from 'redux/auth/selectors';
import { toast } from 'react-toastify';
import { Container, LogoutButton } from './UserMenu.styles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const onLogOut = () => {
    dispatch(operationUserLogout())
      .unwrap()
      .then(() => {
        toast.info(' Logout was successful!', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };
  return (
    <Container>
      <IconContext.Provider value={{ size: 30 }}>
        <BiUserCheck />
      </IconContext.Provider>
      <p>Hi, {userName}</p>
      <LogoutButton onClick={onLogOut} type="button">
        Logout
      </LogoutButton>
    </Container>
  );
};

export default UserMenu;
