import React from 'react';
import styles from './services.module.scss';

const Services = () => {
    return (
        <div className={styles.services}>
            <div className={`${styles.servicesSection} ${styles.left}`}></div>
            <div className={`${styles.servicesSection} ${styles.right}`}></div>
        </div>
    );
};

export default Services;