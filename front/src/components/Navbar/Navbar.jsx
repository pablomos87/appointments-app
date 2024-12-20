import React from 'react';
import PageLogo from '../PageLogo/PageLogo';
import UserAuthMenu from '../UserAuthMenu/UserAuthMenu';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { ABOUT, HOME, CONTACT, SCHEDULE_APPOINTMENT } from '../../helpers/pathsRoutes';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
    <PageLogo/>
    <ul className={styles.navbarList}>
      <li className={styles.navbarItem}><Link to={HOME}>Inicio</Link></li>
      <li className={styles.navbarItem}><Link to={ABOUT}>Sobre nosotros</Link></li>
      <li className={styles.navbarItem}><Link to={SCHEDULE_APPOINTMENT}>Turnos</Link></li>
      <li className={styles.navbarItem}><Link to={CONTACT}>Contáctanos</Link></li>
    </ul>
    <UserAuthMenu/>      
  </nav>
);
};

export default Navbar;