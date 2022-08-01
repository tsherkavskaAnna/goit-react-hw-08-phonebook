import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authSelectors } from "redux/auth";
import { authOperations } from "redux/auth";
import { useGetContactsQuery } from "redux/contacts/contacts-slice";
import defaultAvatar from './Avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    const name = useSelector(authSelectors.getUserName);
    const { refetch } = useGetContactsQuery();
    const avatar = defaultAvatar;

    useEffect(() => {
        isLoggedIn && refetch();
    }, [isLoggedIn, refetch])

    const logOut = event => {
        dispatch(authOperations.logOut())
    }

    return (
    <div className={s.userMenuContainer}>
        <img src={avatar} alt=" " width="32" className={s.avatarImg}  />
        <span className={s.name}>Welcome, {name}</span>
        <button className={s.button} type="button" onClick={logOut} >
            Log out
        </button>
    </div>
    );
}
