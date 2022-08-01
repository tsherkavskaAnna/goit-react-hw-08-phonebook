import { NavLink } from "react-router-dom";
import React from "react";
import s from '../Navigation/Navigation.module.css'

export default function AuthNav() {
    return (
    <div>
        <NavLink
        to='/register'
        className = {({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
         Register
        </NavLink>
        <NavLink
        to='/login'
        className = {({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
         Log in
        </NavLink>
    </div>
    );
  }