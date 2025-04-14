import React from 'react';
// react-i18next에서 제공하는 훅을 가져옴
import { useTranslation } from 'react-i18next';
import styles from './languageSwitch.module.scss';

const LanguageSwitch = () => {
    // t: 번역된 텍스트를 가져오는 함수
    // i18n: 언어 변경 등 다국어 관련 기능을 제공하는 객체
    const { t, i18n } = useTranslation();

    // lng 매개변수로 전달된 언어코드('kor', 'eng', 'esp')로 언어를 변경하는 함수
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={styles.languageSwitch}>
            {/* 
                onClick: 클릭 시 한국어로 언어 변경
                t('common.lang.ko'): translations.js에서 정의된 경로로 번역된 텍스트를 가져옴 
            */}
            <button onClick={() => changeLanguage('kor')}>{t('common.lang.ko')}</button>
            <button onClick={() => changeLanguage('eng')}>{t('common.lang.en')}</button>
            <button onClick={() => changeLanguage('esp')}>{t('common.lang.es')}</button>
        </div>
    );
};

export default LanguageSwitch;