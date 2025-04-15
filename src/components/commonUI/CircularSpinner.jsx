import React from 'react';
import styles from './CircularSpinner.module.scss';

const CircularSpinner = ({ size = 'medium' }) => {
    return (
        <div className={`${styles.spinner} ${styles[size]}`}>
            <div className={styles.spinnerCircle}></div>
        </div>
    );
};

export default CircularSpinner;