import React from "react";
import s from './HomePage.module.css';
import { authSelectors } from "redux/auth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Container from "components/Container";

export default function HomePage() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const name = useSelector(authSelectors.getUserName);

    return (
      <Container>
      <>
        {isLoggedIn ? (
          <>
          <h1 className={s.title}>Welcome {name} to Phonebook</h1>
          <Navigate to="/contacts" />
          </>
        ) : (
          <div className={s.section}>
            <h1 className={s.title}>Welcome to Phonebook</h1>
          </div>
        )}
      </>
      </Container>
    )
  }