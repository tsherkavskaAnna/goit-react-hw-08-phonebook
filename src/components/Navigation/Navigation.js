import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import s from './Navigation.module.css';

export default function Navigation() {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return (
    <nav>
     <NavLink
        to="/"
        exact="true"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
        Home
        </NavLink>
        {isLoggedIn && (
        <NavLink
        to="/contacts"
        exact="true"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
        Contacts
        </NavLink>
        )}      
        <Outlet />
        </nav>
)}
