import { useSelector } from "react-redux";
import { NavLink , Outlet } from "react-router-dom";
import { authSelectors } from "redux/auth";
import s from './Navigation.module.css';

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <nav>
        <NavLink
        to='/'
        className = {({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
         Home
        </NavLink>
        {isLoggedIn && (
        <NavLink
        to='/contacts'
        className = {({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
         Contacts
        </NavLink>
        )}
        <Outlet />
    </nav>
    )
}

export default Navigation;