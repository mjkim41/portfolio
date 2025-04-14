import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import styles from './speech.module.scss';
import profilePic from '../../../assets/profilePic.jpg';
// 글자 타이핑 효과 주는 animation
import { TypeAnimation } from 'react-type-animation';

/*
 * 타이핑 효과 주는 법
 * 1. npm install react-type-animation
 * 2. import { TypeAnimation } from 'react-type-animation';
 * 3. <TypeAnimation
  sequence={[
    'First text', // 첫 번째 텍스트
    1000,         // 1초 대기
    'Second text',// 두 번째 텍스트
    2000,         // 2초 대기
    '',           // 텍스트 삭제
  ]}
  wrapper="span"  // HTML 요소 지정
  speed={50}      // 타이핑 속도 (ms)
  repeat={Infinity} // 반복 횟수
/>
 */

const Speech = () => {
    // 번역용
    const { t, i18n } = useTranslation();

    // 번역된 텍스트 가져오기(중간에 언어 바뀔 시 반영되어야 하므로, useState로 관리)
    const [translatedText, setTranslatedText] = useState(t('pages.main.hero.speech.line1'));

    useEffect(() => {
        setTranslatedText(t('pages.main.hero.speech.line1'));
    }, [t, i18n.language]);

    return (
        <div className={styles.bubbleContainer}>
            <div className={styles.bubble}>
                <TypeAnimation
                    key={translatedText}
                    sequence={[
                        1000,
                        translatedText,
                        2000, // 텍스트가 보여지는 시간
                        '', // 빈 문자열로 지워지는 효과
                        1000, // 잠시 멈추는 시간
                    ]}
                    wrapper='span'
                    speed={40}
                    deletionSpeed={60}
                    repeat={Infinity}
                    />
            </div>
            <img src={profilePic} alt='profilePic' />
        </div>
    );
};

export default Speech;