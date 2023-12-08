import { useSelector, useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

import {
  selectIsAuth,
  selectAuthError,
} from 'redux/auth/selectors';
import { operationRefreshUser } from 'redux/auth/operations';
import { selectError } from 'redux/contacts/selectors';

const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);
  const errorAuth = useSelector(selectAuthError);
  const errorFetch = useSelector(selectError);

  useEffect(() => {
    dispatch(operationRefreshUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>

      {isAuth && <UserMenu />}
      {errorAuth || (errorFetch && toast.error('Please try again!'))}

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </>
  );
};

export default App;
