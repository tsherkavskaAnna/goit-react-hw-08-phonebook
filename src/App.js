import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import { Routes, Route } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from 'components/Container';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));



export default function App() {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrent)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
      <Container>
        {isFetchingUser}
        <AppBar />
        <Suspense fallback="Loading...">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route element={<PrivateRoute />}>
              <Route element={<ContactsPage />} path="/contacts" />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/login" element={<LoginPage/>} />
            </Route>
          </Routes>
        </Suspense>
        <ToastContainer />
      </Container>
    )
}