# 포트폴리오 웹사이트 프로젝트 | Portfolio Website Project 

💡 프로젝트 개요: React 기반의 반응형 포트폴리오 웹사이트입니다. 그동안 해 온 프로젝트와 기술스택을 담고 있습니다.

💡 Overview: A responsive portfolio website built with React, featuring animations powered by Framer Motion and Three.js, and multilingual support using i18next.

## 1. 배포 웹사이트 | Live Demo
🌐 https://mjkim41.github.io/portfolio/

## 2. Git Repository
📁 https://github.com/mjkim41/portfolio

## 3. ⚙️ Tech Stack with Tools

#### Frontend Technologies
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)

#### Animation Libraries
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat&logo=framer&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js%20(R3F%20%2B%20Drei)-000000?style=flat&logo=three.js&logoColor=white)

#### Internationalization
![i18next](https://img.shields.io/badge/i18next-26A69A?style=flat&logo=i18next&logoColor=white)

#### IDE
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-000000?style=flat&logo=intellij-idea&logoColor=white)

#### Version Control & Deployment
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github-pages&logoColor=white)

## 4. 주요 기능 | Main Features

#### 1) 💼 포트폴리오 구성 | Portfolio Contents
- 개발자 소개, 주요 기술 스택, 주요 프로젝트

- Introduction section, technical skills, and project showcase

#### 2) 🌐 다국어 지원 | Multilingual Support
- i18next를 활용한 한국어/영어/스페인어 언어 전환 기능
- 브라우저 설정 언어 자동 감지

- Multi-language support (Korean/English/Spanish) with i18next
- Auto-detection of browser language settings

#### 3) 🎨 애니메이션 효과 | Animation Effects
- Framer Motion을 활용한 애니메이션 구현
- Three.js를 이용한 3D 요소 구현

- Smooth animations powered by Framer Motion
- Interactive 3D elements using Three.js

## 5. 트러블 슈팅 | Troubleshooting

### 1) Three.js Canvas White Flash 이슈
#### 문제 상황 | Problem
- Three.js Canvas 초기 렌더링 시 흰색 깜빡임(white flash) 현상 발생
- 일반적인 로딩 처리 방식인 Suspense를 적용해도 해결되지 않음
```jsx
<Suspense fallback={<Spinner />}>
    <Canvas>
        <Shape />
    </Canvas>
</Suspense>
```
- Initial white flash occurs during Three.js Canvas rendering
- Standard loading approach using Suspense fails to resolve the issue

#### 원인 | Root Cause
- Three.js에서 '로딩 완료' 시점이 실제 도형이 그려진 후가 아닌, Canvas가 DOM에 마운트된 시점임
- 따라서 Suspense로는 이 시점 차이를 제어할 수 없음
- 3D 파일(GLB)과 달리 기본 도형은 Canvas 마운트 완료가 곧 로딩 완료로 인식되어 흰 화면이 노출됨
- Three.js considers loading complete when Canvas mounts to DOM, not when shapes finish rendering
- This timing mismatch cannot be handled by Suspense
- For basic shapes (unlike GLB files), Canvas mounting is treated as load completion, triggering the white flash

#### 해결 방법 | Solution
- Canvas 마운트 자체를 지연시켜 실제 도형이 그려질 때까지 대기
- Delayed Canvas mounting until shapes are ready to render

```jsx
const ThreeCanvas = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Canvas 마운트 지연
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Canvas 마운트 자체를 지연
    if (!isLoaded) return null;

    return (
        <Canvas>
            <Shape />
        </Canvas>
    );
};
```

#### 결과 | Outcome
- 실제 도형이 그려질 준비가 된 후에 Canvas가 마운트되어 흰색 깜빡임 제거
- 더 자연스러운 화면 전환
- Successfully eliminated white flash by ensuring proper render timing
- Achieved seamless visual transition

