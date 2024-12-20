import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerTextContainer}>
                <p className={styles.footerText}>© 2024 INA. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
};

export default Footer;
