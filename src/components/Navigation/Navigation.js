import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import s from './Navigation.module.css';

export default function Navigation() {
const isLogIn = useSelector(authSelectors.getIsLogIn);

return (
    <nav>
        <NavLink
        to='/'
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >Home
        </NavLink>
        {isLogIn && (
            <NavLink
            to='/contacts'
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
             Contacts   
            </NavLink>
        )}
    </nav>
)}