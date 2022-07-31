import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";


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

  return  (
    <>
      {!isFetchingUser && (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              } />
              <Route path="register" element={
                <PublicRoute >
                  <RegisterPage />
                </PublicRoute>
              } />
              <Route path="login" element={
                <PublicRoute >
                  <LoginPage />
                </PublicRoute>
              } />
              <Route path="contacts" element={
                <PrivateRoute >
                  <ContactsPage />
                </PrivateRoute>
              } />
            </Routes>
          </Suspense>
          <ToastContainer/>
        </Container>
        )
      }
    </>
    )
}
