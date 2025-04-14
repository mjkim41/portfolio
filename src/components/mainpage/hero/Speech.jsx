import React from 'react';
import styles from './speech.module.scss';
import profilePic from '../../../assets/profilePic.jpg';

const Speech = () => {
    return (
        <div className={styles.bubbleContainer}>
            <div className={styles.bubble}>
                TEXT
            </div>
            <div className={styles.imageContainer}>
                <img src={profilePic} alt='profilePic' />
            </div>
        </div>
    );
};

export default Speech;