import React, {Suspense, useState, useEffect} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera, Stage, Html} from "@react-three/drei";
import {Backend} from "./Backend.jsx";
import Spinner from "../../../commonUI/Spinner.jsx";
import styles from './modelContainer.module.scss';

const BackendContainer = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {mounted ? (
                <Canvas>
                    <Suspense fallback={
                        <Html center>
                            <Spinner />
                        </Html>
                    }>
                        <Stage environment="night" intensity={0.5}>
                            <Backend/>
                        </Stage>
                        <OrbitControls
                            enableZoom={true}
                            reverseZoom={false}
                        />
                        <PerspectiveCamera position={[-5, 0, 1.8]} zoom={0.8} makeDefault/>
                    </Suspense>
                </Canvas>
            ) : (
                <div className={styles.placeholder} />
            )}
        </div>
    );
};

export default BackendContainer;