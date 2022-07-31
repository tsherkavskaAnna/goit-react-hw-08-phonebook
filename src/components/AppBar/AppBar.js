//import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import s from './AppBar.module.css';
import Navigation from "components/Navigation/Navigation";



export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}