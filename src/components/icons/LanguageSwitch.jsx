import React from 'react';
import styles from './languageSwitch.module.scss';

const LanguageSwitch = () => (
    <div className={styles.languageSwitch}>
        <button>한국어</button>
        <button>ENG</button>
        <button>ESP</button>
    </div>
);

export default LanguageSwitch;