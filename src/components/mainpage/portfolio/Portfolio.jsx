import React, { useRef, useEffect } from 'react';
import styles from './portfolio.module.scss';
import { useTranslation } from 'react-i18next';
import { getTechStackBadges } from '../../../utils/badgeUtils';

const ListItem = ({ item }) => {
    const badges = getTechStackBadges(item.techStack);

    return (
        <div className={styles.portfolioItem}>
            <div className={styles.portfolioImg}>
                <img src={`/portfolio/assets/projects/${item.img}`} alt={item.title}/>
            </div>
            <div className={styles.portfolioText}>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <div className={styles.badges}>
                    {badges.map((badge, index) => (
                        <img
                            key={index}
                            src={badge}
                            alt="tech stack badge"
                            className={styles.badge}
                        />
                    ))}
                </div>
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button>GitHub</button>
                </a>
            </div>
        </div>
    );
}
const Portfolio = () => {
    const { t } = useTranslation();
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            if (scrollRef.current) {
                // 스크롤 속도를 3배로 증가
                const scrollSpeed = 3;
                scrollRef.current.scrollLeft += e.deltaY * scrollSpeed;
            }
        };

        const element = scrollRef.current;
        if (element) {
            element.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (element) {
                element.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    const items = [
        {
            id: 1,
            img: 'talent.png',
            title: t('pages.main.portfolio.items.item1.title'),
            desc: t('pages.main.portfolio.items.item1.desc'),
            techStack: t('pages.main.portfolio.items.item1.techStack'),
            github: 'https://github.com/joayong202503/joayong_front',
        },
        {
            id: 2,
            img: 'portfolio.png',
            title: t('pages.main.portfolio.items.item2.title'),
            desc: t('pages.main.portfolio.items.item2.desc'),
            techStack: t('pages.main.portfolio.items.item2.techStack'),
            github: 'https://github.com/mjkim41/portfolio',
        },
        {
            id: 3,
            img: 'interior.png',
            title: t('pages.main.portfolio.items.item3.title'),
            desc: t('pages.main.portfolio.items.item3.desc'),
            techStack: t('pages.main.portfolio.items.item3.techStack'),
            github: 'https://github.com/home-decor-202501/home-decor',
        }
    ];

    return (
        <div className={styles.portfolio}>
            <div 
                className={styles.portfolioList} 
                ref={scrollRef}
            >
                {items.map((item) => (
                    <ListItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
