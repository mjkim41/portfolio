import React from 'react';
import Hero from '../components/mainpage/hero/Hero.jsx';
import Portfolio from '../components/mainpage/portfolio/Portfolio.jsx';
import Contact from '../components/mainpage/contact/Contact.jsx';
import styles from './mainPage.module.scss';
import TechStack from "../components/mainpage/techStack/TechStack.jsx";

const MainPage = () => {
    return (
        // global.scss 적용
        <div className='container snapContainer'>
            <section className={styles.section} id='home'>
                <Hero/>
            </section>
            <section className={styles.section} id='techStack'>
                <TechStack/>
            </section>
            <section className={styles.section} id='portfolio'>
                <Portfolio/>
            </section>
            <section className={styles.section} id='contact'>
                <Contact/>
            </section>
        </div>
    );
};

export default MainPage;
