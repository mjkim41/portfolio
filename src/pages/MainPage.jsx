import React from 'react';
import Hero from '../components/mainpage/hero/Hero.jsx';
import Contact from '../components/mainpage/contact/Contact.jsx';
import styles from './mainPage.module.scss';
import TechStack from "../components/mainpage/techStack/TechStack.jsx";
import {Portfolio1,Portfolio2, Portfolio3} from "../components/mainpage/portfolio/PortfolioItem.jsx";

const MainPage = () => {
    return (
        <>
            <div className='container snapContainer'>
                <section className={styles.section} id='home'>
                    <Hero/>
                </section>
                <section className={styles.section} id='techStack'>
                    <TechStack/>
                </section>
                {/* 재능 교환 플랫폼 */}
                <section className={styles.section} id='portfolio1'>
                    <Portfolio1/>
                </section>
                {/* 포폴 사이트 */}
                <section className={styles.section} id='portfolio2'>
                    <Portfolio2/>
                </section>
                {/* 집꾸미기 */}
                <section className={styles.section} id='portfolio3'>
                    <Portfolio3/>
                </section>
                <section className={styles.section} id='contact'>
                    <Contact/>
                </section>
            </div>
        </>
    );
};

export default MainPage;
