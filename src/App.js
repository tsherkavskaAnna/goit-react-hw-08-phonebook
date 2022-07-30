import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

//const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));



export default function App() {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrent)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return  isFetchingUser ? (
    ''
  ) : (
      <Container>
        <AppBar />
        <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
        </Suspense>
        <ToastContainer />
      </Container>
    )
}