import styles from './WelcomeSection.module.css';
import React from 'react';

const WelcomeSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imgContainer}>
        <h1>Instituto Neurológico Argentino</h1>
        <span className={styles.text}>Liderando en salud cerebral</span>
      </div>
    </section>
  );
};

export default WelcomeSection;
