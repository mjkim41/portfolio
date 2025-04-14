import React from 'react';
import styles from './contactButton.module.scss';

const ContactButton = () => {
    return (
        <div className={styles.contactButton}>
            <svg viewBox='0 0 200 200' width='150' height='150'>
                {/* 동그라미 */}
                <circle cx='100' cy='100' r='90' fill='pink'/>
                <path
                    id='innerCirclePath'
                    fill='none'
                    d='M 100,100 m -60,0 a 60,60 0 1,0 120,0 a 60,60 0 1,0 -120,0'
                />
                {/* 텍스트 1 */}
                <text className={styles.circleText}>
                    <textPath href='#innerCirclePath' startOffset='70%'>Hire Now</textPath>
                </text>
                {/* 텍스트 2 */}
                <text className={styles.circleText}>
                    <textPath href='#innerCirclePath' startOffset='20%'>Contact Me</textPath>
                </text>
            </svg>
            {/* 이메일 아이콘 */}
            <div className={styles.arrow}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="50"
                    height="50"
                    fill="none"
                    stroke="black"
                    strokeWidth="1.5"
                >
                    <rect x="4" y="6" width="16" height="12" rx="2"/>
                    <path d="M4 9l8 4 8-4"/>
                </svg>
            </div>
        </div>
    );
};

export default ContactButton;