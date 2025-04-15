import React, {useRef, useState} from 'react';
import styles from './techStack.module.scss';
import FrontendContainer from "./3d/FrontendContainer.jsx";
import BackendContainer from "./3d/BackendContainer.jsx";
import LibrariesContainer from "./3d/LibrariesContainer.jsx";
import FrontendIcon from "../../../components/icons/FrontendIcon.jsx";
import BackendIcon from "../../../components/icons/BackendIcon.jsx";
import ToolsIcon from "../../../components/icons/ToolsIcon.jsx";
import {motion, useInView} from "motion/react";

const textVariants = {
    initial: {
        x: -100,
        y: -100,
        opacity:0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}

const listVariants = {
    initial: {
        x: -100,
        opacity:0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5
        }
    }
}

const techStackCategories = [
    {
        id: 1,
        icon: <FrontendIcon />,
        title: 'Frontend',
        description: 'JavaScript / React / HTML, CSS / Sass',
    },
    {
        id: 2,
        icon: <BackendIcon />,
        title: 'Backend and DB',
        description: 'Java17 / Spring / Spring Data JPA, MyBatis / MariaDB',
    },
    {
        id: 3,
        icon: <ToolsIcon />,
        title: 'Experienced Libraries and Tools',
        description: 'Redux Toolkit / Three.js, Motion / Selenium, Yup / IntelliJ, VSCode / Gradle',
    },
];

const TechStack = () => {

    // 현재 선택된 tech stack id
    // 왼쪽의 박스를 클릭하면 해당 박스의 id로 변경됨
    const [currentTechStackId, setCurrentTechStackId] = useState(1);

    // useInView : motion 라이브러리에서 제공하는 intersection observer 역할
    const ref = useRef();
    const isInView = useInView(ref, {margin: '-200px'});
    return (
        <div className={styles.stackWrapper} ref={ref}>
            <div className={`${styles.stackSection} ${styles.left}`}>
                <motion.h1
                    variants={textVariants}
                    initial='initial'
                    animate={isInView ? 'animate' : 'initial'}
                    className={styles.sectionTitle}
                >
                    Tech Stack
                </motion.h1>
                <motion.div
                    variants={listVariants}
                    animate={isInView ? 'animate' : 'initial'}
                    className={styles.techStackList}
                >
                    {techStackCategories.map((category) => (
                        <motion.div
                            variants={listVariants}
                            key={category.id}
                             // 클릭이벤트 : 클릭 시 해당 id로 선택된 tech stack을 변경 (3D 모델 교체용)
                            onClick={() => setCurrentTechStackId(category.id)}
                            className={styles.techStack}
                        >
                            <div className={styles.techStackIcon}>
                                {category.icon}
                            </div>
                            <div className={styles.techStackInfo}>
                                <h2>{category.title}</h2>
                                <h3>{category.description}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className={`${styles.stackSection} ${styles.right}`}>
                {currentTechStackId === 1 && <FrontendContainer/>}
                {currentTechStackId === 2 && <BackendContainer/>}
                {currentTechStackId === 3 && <LibrariesContainer/>}
                <div className={styles.license}>
                    MacBook 3D Model: <a href="https://sketchfab.com/3d-models/macbook-pro-2021-37763335f74b497e91906986b170b5d1" target="_blank" rel="noopener noreferrer">KangaroOz 3D</a>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
