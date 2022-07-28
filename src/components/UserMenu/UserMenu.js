import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "redux/auth";
import defaultAvatar from './Avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const avatar = defaultAvatar;

    return (
    <div className={s.userMenuContainer}>
        <img src={avatar} alt=" " width="32" className={s.avatarImg}  />
        <span>Welcome to phonebook, {name}</span>
        <button type="button" onClick={() => dispatch(authOperations.logOut())}  >
            Log out
        </button>
    </div>
    );
}
