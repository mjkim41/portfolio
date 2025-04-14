import React from 'react';
import { motion } from 'motion/react';
import styles from './scrollIcon.module.scss';

const ScrollIcon = ({ fill = "none" }) => {
    const wheelAnimation = {
        animate: { y: [0, 3] },
        transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    };

    return (
        <svg
            className={styles.scrollIcon}
            viewBox='0 0 24 24'
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
            />
            {/* 스크롤 화살표 - 고정 */}
            <path
                d="M12 4V9"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
            />
            {/* 휠 용 원 - 화살표 안에서 움직임 */}
            <motion.path
                {...wheelAnimation}
                d="M12 5C11.4477 5 11 5.44772 11 6V6.5C11 7.05228 11.4477 7.5 12 7.5C12.5523 7.5 13 7.05228 13 6.5V6C13 5.44772 12.5523 5 12 5Z"
                fill="white"
            />
        </svg>
    );
};

export default ScrollIcon;