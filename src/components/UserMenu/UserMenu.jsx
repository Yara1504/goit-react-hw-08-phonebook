import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => dispatch(logOut());

    return (
        <div className={css.div}>
            <p className={css.name}>{user.name}</p>
            <button className={css.btn} type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}