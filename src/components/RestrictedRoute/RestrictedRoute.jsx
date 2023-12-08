import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/selectors';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
