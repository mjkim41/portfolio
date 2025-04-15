import React from 'react';
import styles from '../mainpage/techStack/techStack.module.scss';

const FrontendIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/svg" className={styles.techStackIconImg}>
        <path d="M8 6L3 12L8 18M16 6L21 12L16 18" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
    </svg>
);

export default FrontendIcon;