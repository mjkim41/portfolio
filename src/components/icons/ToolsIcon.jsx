import React from 'react';
import styles from '../mainpage/techStack/techStack.module.scss';

const ToolsIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/svg" className={styles.techStackIconImg}>
        <path d="M10.5 6H13.5M10.5 18H13.5M6 13.5V10.5M18 13.5V10.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"/>
        <rect x="4" y="4" width="16" height="16" rx="2" 
              stroke="currentColor" 
              strokeWidth="2"/>
    </svg>
);

export default ToolsIcon;