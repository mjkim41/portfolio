import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = ({ size = 'medium' }) => {
    return (
        <div
            className={`${styles.spinner} ${styles[size]}`}
            role="status"
            aria-label="loading"
        >
            <span>●</span>
        </div>
    );
};

export default Spinner;