import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './hero.module.scss';
import EmailIcon from "../../icons/EmailIcon.jsx";
import ScrollIcon from "../../icons/ScrollIcon.jsx";
import githubIcon from '../../../assets/github.png';
import BlogIcon from "../../icons/BlogIcon.jsx";
import Speech from "./Speech.jsx";
import ContactButton from "../../icons/ContactButton.jsx";
import LanguageSwitch from "../../icons/LanguageSwitch.jsx";

const Hero = () => {
    // i18n 라이브러리 번역 툴
    const { t } = useTranslation();

    return (
        <div className={styles.hero}>
            {/* 언어 아이콘 */}
            <div className={styles.languageSwitchContainer}>
                <LanguageSwitch />
            </div>

            {/* 왼쪽 */}
            <div className={`${styles.heroSection} ${styles.left}`}>
                {/* 타이틀 */}
                <h1 className={styles.title}>
                    {/* 안녕하세요 */}
                    {t('pages.main.hero.greeting')}
                    <br/>
                    {/* 김미정입니다 */}
                    <span>{t('pages.main.hero.name')}</span>
                </h1>
                {/* call to actions */}
                <div className={styles.ctaContainer}>
                    {/* 저에 대해 더 궁금하시다면, 확인하세요*/}
                    <h2>{t('pages.main.hero.profileTitle')}</h2>
                    <p>{t('pages.main.hero.profileDesc')}</p>
                    <div className={styles.ctaButtons}>
                        <a
                            href="https://drive.google.com/file/d/1lQbntW4BR0fdHoSk7m8sWjZkeQc0qAud/view?usp=sharing"
                            className={styles.resumeButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('pages.main.hero.resumeBtn')}
                        </a>
                        <a
                            className={styles.iconLink}
                            href='https://github.com/mjkim41'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={githubIcon} alt='GitHub' className={styles.icon}/>
                        </a>
                        <a
                            className={styles.iconLink}
                            href="https://velog.io/@kimmy25312"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BlogIcon className={styles.icon}/>
                        </a>
                    </div>
                </div>
                <a href='#services' className={styles.scroll}>
                    <ScrollIcon/>
                </a>
            </div>

            {/* 오른쪽     */}
            <div className={`${styles.heroSection} ${styles.right}`}>
                {/* 빈 공간 */}
                <div></div>
                {/* 대화창 */}
                <Speech />
                {/* 빈 공간 */}
                <div></div>
                {/*  컨택트 버튼 */}
                <a href='/#contact' className={styles.contactLink}>
                    <ContactButton />
                </a>
            </div>
        </div>
    );
};

export default Hero;