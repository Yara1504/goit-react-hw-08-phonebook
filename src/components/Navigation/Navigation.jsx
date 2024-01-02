import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from '../AuthNav/AuthNav.module.css';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <Link className={css.link} to='/'>
                Home
            </Link>
            {isLoggedIn && <Link to="/contacts" className={css.link}>Contacts</Link>}
        </nav>
    )
}