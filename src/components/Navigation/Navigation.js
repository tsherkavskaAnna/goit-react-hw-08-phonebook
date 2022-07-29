import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import s from './Navigation.module.css';

export default function Navigation() {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return (
    <nav>
        {!isLoggedIn ? (
            <NavLink
            to="/"
            exact="true"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
            Home
            </NavLink>
        ) : (
            <NavLink
            to="/contacts"
            exact="true"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
            Phonebook
            </NavLink>
        )}
        </nav>
)}
