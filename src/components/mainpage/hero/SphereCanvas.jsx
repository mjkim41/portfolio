import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Shape from './Shape';

const SphereCanvas = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    if (!isLoaded) return null;

    return (
        <Canvas>
            <Shape />
        </Canvas>
    );
};

export default SphereCanvas;