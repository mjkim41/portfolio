import React from 'react';
import styles from '../mainpage/techStack/techStack.module.scss';

const BackendIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/svg" className={styles.techStackIconImg}>
        <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z" 
              stroke="currentColor" 
              strokeWidth="2"/>
        <path d="M7 8H7.01M10 8H10.01" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"/>
        <path d="M7 12H17M7 15H13" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"/>
    </svg>
);

export default BackendIcon;