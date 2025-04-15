import React, {Suspense} from 'react';
import { useTranslation } from 'react-i18next';
import styles from './hero.module.scss';
import ScrollIcon from "../../icons/ScrollIcon.jsx";
import githubIcon from '../../../assets/github.png';
import BlogIcon from "../../icons/BlogIcon.jsx";
import Speech from "./Speech.jsx";
import ContactButton from "../../icons/ContactButton.jsx";
import LanguageSwitch from '../../icons/LanguageSwitch';
import profilePic from '../../../assets/heroImage.png';
import heroImage from '../../../assets/heroImage.svg';
import {motion} from 'motion/react';
import SphereCanvas from './SphereCanvas.jsx';
import Shape from "./Shape.jsx";

const ctaButtonsVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        }
    }
}

const Hero = () => {
    // i18n 라이브러리 번역 툴
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.hero}>
            <div className={styles.languageSwitchContainer}>
                <LanguageSwitch />
            </div>
            {/* 왼쪽 */}
            <div className={`${styles.heroSection} ${styles.left}`}>
                {/* 타이틀 */}
                <motion.h1
                    className={styles.title}
                    initial={{y: -100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 1}}
                >
                    {/* 안녕하세요 */}
                    {t('pages.main.hero.greeting')}
                    <br/>
                    {/* 김미정입니다 */}
                    <span>{t('pages.main.hero.name')}</span>
                </motion.h1>
                {/* call to actions */}
                <motion.div
                    className={styles.ctaContainer}
                    variants={ctaButtonsVariants}
                    initial='initial'
                    animate='animate'
                >
                    {/* 저에 대해 더 궁금하신가요? */}
                    <motion.h2 variants={ctaButtonsVariants}>{t('pages.main.hero.profileTitle')}</motion.h2>
                    <motion.p variants={ctaButtonsVariants}>{t('pages.main.hero.profileDesc')}</motion.p>
                    <motion.div variants={ctaButtonsVariants} className={styles.ctaButtons}>
                        {/* 이력서와 포트폴리오 버튼을 위한 div */}
                        <div className={styles.buttonGroup}>
                            {i18n.language === 'kor' && (
                                <>
                                    <motion.a
                                        href="https://drive.google.com/file/d/1ScjyNPloH7Bts2ps4EvSJhRxn04kCNBW/view?usp=sharing"
                                        className={styles.resumeButton}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        variants={ctaButtonsVariants}
                                    >
                                        {t('pages.main.hero.resumeBtn')}
                                    </motion.a>
                                    <motion.a
                                        href="https://drive.google.com/file/d/1oRAtUjcNFLRVsTvZYFC6CjVmV599VPtX/view?usp=sharing"
                                        className={styles.resumeButton}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        variants={ctaButtonsVariants}
                                    >
                                        {t('pages.main.hero.portfolioBtn')}
                                    </motion.a>
                                </>
                            )}
                        </div>
                        {/* 아이콘들을 위한 div */}
                        <div className={styles.iconGroup}>
                            <motion.a
                                className={styles.iconLink}
                                href='https://github.com/mjkim41'
                                target='_blank'
                                rel='noopener noreferrer'
                                variants={ctaButtonsVariants}
                            >
                                <img src={githubIcon} alt='GitHub' className={styles.icon}/>
                            </motion.a>
                            <motion.a
                                variants={ctaButtonsVariants}
                                className={styles.iconLink}
                                href='https://velog.io/@kimmy25312'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <BlogIcon className={styles.icon}/>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.a
                    href='#techStack'
                    className={styles.scroll}
                    animate={{y:[0,5], opacity: [0,1,0]}}
                    transition={{duration: 4, ease: 'easeInOut', repeat: Infinity}}
                >
                    <ScrollIcon/>
                </motion.a>
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
                <motion.a
                    href='#contact'
                    className={styles.contactLink}
                    animate={{
                        x: [200, 0],
                        opacity: [0,1]
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                    <ContactButton />
                </motion.a>
            </div>
            {/* 프로필 사진 */}
            <div className={styles.background}>
                <div className={styles.shapeWrapper}>
                    <SphereCanvas />
                </div>
                <div className={styles.heroImage}>
                    {/* 3D 캐릭터 */}
                    <img
                        src={heroImage}
                        alt='profilePic'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;