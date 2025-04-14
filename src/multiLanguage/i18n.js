// i18next: 다국어 처리를 위한 기본 라이브러리
// react-i18next: React에서 i18next를 편하게 사용할 수 있게 해주는 확장 라이브러리
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// 자세한 번역은 translations.js 파일에 적을 예정
import { resources } from './translations';
import { logger } from '../utils/logger';

// 초기화 직후 즉시 언어 설정
const setInitialLanguage = () => {
  // 브라우저의 언어 설정 확인
  const browserLang = navigator.language;
  // 국가 코드 제거 (ko-KR -> ko)
  const simpleLang = browserLang.split('-')[0];

  // translations.js의 언어 코드로 변환
  let targetLang;
  switch (simpleLang) {
    case 'ko':
      targetLang = 'kor';
      break;
    case 'es':
      targetLang = 'esp';
      break;
    default:
      targetLang = 'eng';
  }
  
  return targetLang;
};

// 초기 언어 설정 가져오기
const initialLang = setInitialLanguage();

i18n
  // use()는 "이 기능을 사용하겠다"고 선언하는 메서드
  .use(LanguageDetector) // 브라우저 언어 감지 기능을 사용하겠다고 선언
  .use(initReactI18next) // i18next를 React 컴포넌트 내에서 사용할 수 있게 연결
  .init({  // 초기 설정
    resources,
    fallbackLng: 'eng', // 지원하지 않는 언어로 접근했을 때 기본으로 보여줄 언어
    debug: true, // 개발하는 동안은 true로 설정. 이후 false로 바꾸기 (콘솔창에 번역 관련 정보를 부여주기)
    detection: {
      order: ['navigator'],
      caches: [],
    },
    load: 'languageOnly',  // 국가 코드 제거 (ko-KR -> ko)
    preload: ['kor', 'eng', 'esp'],
    lng: initialLang, // 초기 언어 직접 설정
  });

export default i18n;