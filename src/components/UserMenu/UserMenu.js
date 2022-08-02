import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authSelectors } from "redux/auth";
import { authOperations } from "redux/auth";
import defaultAvatar from './Avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const name = useSelector(authSelectors.getUserName);
    const avatar = defaultAvatar;


    return (
    <div className={s.userMenuContainer}>
        <img src={avatar} alt=" " width="32" className={s.avatarImg}  />
        <span className={s.name}>Welcome, {name}</span>
        <button className={s.button} type="button" onClick={() => {
            dispatch(authOperations.logOut());
            navigate('/login')
        }}
        >
            Log out
        </button>
    </div>
    );
}
