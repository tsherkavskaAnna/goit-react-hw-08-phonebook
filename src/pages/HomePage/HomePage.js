import React from "react";
//import s from './HomePage.module.css';
import { authSelectors } from "redux/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function HomePage() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);


    return (
      isLoggedIn ? (
        <h1>
          Welcome a phonebook! <br />
          <Link to="/contacts">add new contact</Link>
        </h1>
      ) : (
        <h1>Welcome to phonebook! </h1>
      )
    )
  }