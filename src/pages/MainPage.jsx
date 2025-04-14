import React from 'react';
import Hero from '../components/mainpage/hero/Hero.jsx';
import Services from '../components/mainpage/services/Services.jsx';
import Portfolio from '../components/mainpage/porfolio/Portfolio.jsx';
import Contact from '../components/mainpage/contact/Contact.jsx';
import styles from './mainPage.module.scss';

const MainPage = () => {
    return (
        // global.scss 적용
        <div className='container'>
            <Hero/>
            <Services/>
            <Portfolio/>
            <Contact/>
        </div>
    );
};

export default MainPage;
