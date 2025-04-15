// project 별로 페이지 만드는 유틸

import React, {useRef} from 'react';
import styles from './portfolioItem.module.scss';
import { useTranslation } from 'react-i18next';
import { getTechStackBadges } from '../../../utils/badgeUtils';
import { motion, useInView } from 'framer-motion';

// 포트폴리오 내용들
export const portfolioItems = [
    {
        id: 1,
        img: 'talent.png',
        title: 'pages.main.portfolio.items.item1.title',
        desc: 'pages.main.portfolio.items.item1.desc',
        techStack: 'pages.main.portfolio.items.item1.techStack',
        github: 'https://github.com/joayong202503/joayong_front',
    },
    {
        id: 2,
        img: 'portfolio.png',
        title: 'pages.main.portfolio.items.item2.title',
        desc: 'pages.main.portfolio.items.item2.desc',
        techStack: 'pages.main.portfolio.items.item2.techStack',
        github: 'https://github.com/mjkim41/portfolio',
    },
    {
        id: 3,
        img: 'interior.png',
        title: 'pages.main.portfolio.items.item3.title',
        desc: 'pages.main.portfolio.items.item3.desc',
        techStack: 'pages.main.portfolio.items.item3.techStack',
        github: 'https://github.com/home-decor-202501/home-decor',
    }
];

const PortfolioItem = ({ item }) => {

    // intersection observer용
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,  // 한 번만 실행
        amount: 0.3, // 30% 정도 보일 때 트리거
        margin: "-100px", // 뷰포트 경계 100px 전에 트리거
    });

    // 번역
    const { t } = useTranslation();

    // 뱃지로 변환
    const badges = getTechStackBadges(t(item.techStack));

    // 이미지 애니메이션
    const imgVariants = {
        initial: {
            x: -500,
            y: 500,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            }
        }
    }

    const textVariants = {
        initial: {
            x: 500,
            y: 500,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeInOut',
                staggerChildren: 0.15, // (0.6초 / 4항목)
            }
        }
    };

    const itemVariants = {
        initial: {
            y: 50,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5, // 0.3 → 0.5로 증가
                ease: 'easeOut',
            }
        }
    };

    return (
        <div className={styles.portfolioItem} ref={ref}>
            <motion.div
                className={styles.portfolioImg}
                variants={imgVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
            >
                <img src={`/portfolio/assets/projects/${item.img}`} alt={t(item.title)}/>
            </motion.div>
            <motion.div
                className={styles.portfolioText}
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
            >
                <motion.h1 variants={itemVariants}>{t(item.title)}</motion.h1>
                <motion.p variants={itemVariants}>{t(item.desc)}</motion.p>
                <motion.div className={styles.badges} variants={itemVariants}>
                    {badges.map((badge, index) => (
                        <img
                            key={index}
                            src={badge}
                            alt="tech stack badge"
                            className={styles.badge}
                        />
                    ))}
                </motion.div>
                <motion.a
                    variants={itemVariants}
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>GitHub</button>
                </motion.a>
            </motion.div>
        </div>
    );
};

export const Portfolio1 = () => <PortfolioItem item={portfolioItems[0]} />;
export const Portfolio2 = () => <PortfolioItem item={portfolioItems[1]} />;
export const Portfolio3 = () => <PortfolioItem item={portfolioItems[2]} />;

export default PortfolioItem;