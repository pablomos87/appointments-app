import styles from "./UserAuthMenu.module.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MY_APPOINTMENTS, REGISTER, LOGIN } from "../../helpers/pathsRoutes";
import { logout } from '../../redux/features/users/usersSlice';


const UserAuthMenu = () => {
  const user = useSelector((state) => state.usersSlice.login);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>

      {user ? (
        <ul className={styles.profileList}>
          <li className={styles.profileMenu}>
            <button className={styles.profileButton}>PERFIL</button>
            <div className={styles.profileMenuContent}>
              <Link to={MY_APPOINTMENTS}> Mis turnos</Link>
            </div>
          </li>
          <li className={styles.profileItem}>
          <button onClick={handleLogout} className={styles.logoutButton}>
            LOGOUT
          </button>
          </li>
        </ul>
      ) : (
        <ul className={styles.profileList}>
          <li className={styles.profileItem}>
            <Link className={styles.profileLink} to={REGISTER}>REGISTER</Link>
          </li>
          <li className={styles.profileItem}>
            <Link className={styles.profileLink} to={LOGIN}>LOGIN</Link>
          </li>
        </ul>
      )}

    </>
  )
}

export default UserAuthMenu;


