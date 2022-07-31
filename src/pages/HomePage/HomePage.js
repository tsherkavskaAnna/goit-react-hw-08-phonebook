import React from "react";
import s from './HomePage.module.css';
import { authSelectors } from "redux/auth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function HomePage() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
      <>
        {isLoggedIn ? (
          <Navigate to="/contacts" />
        ) : (
          <div className={s.section}>
            <h1 className={s.title}>Welcome to Phonebook</h1>
          </div>
        )}
      </>
    )
  }