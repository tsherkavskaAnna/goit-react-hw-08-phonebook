import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export default function Navigation() {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return (
    <nav>
       <NavLink to='/'>Home</NavLink>
       {isLoggedIn && <NavLink to='contacts'>Contacts</NavLink>}
        </nav>
)}
