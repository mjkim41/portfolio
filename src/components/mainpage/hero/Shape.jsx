// three.js 사용법 : manuals>Three.jsx 참고

// import
import { Canvas } from '@react-three/fiber';
import {MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei';

const Shape = () => {
    return (
        <>
            {/* 물체형태 : Sphere */}
            <Sphere args={[1, 100, 200]} scale={[2.6,2.4,2.4]}>
                {/* MeshDistortMaterial : 3D 물체의 왜곡 */}
                <MeshDistortMaterial
                    color="#DB8B9B"
                    attach="material"
                    distort={0.5}
                    speed={2}
                />
            </Sphere>
            {/* ambientLight : 3D 물체의 빛 */}
            <ambientLight intensity={2} />
            {/* directionalLight : 3D 물체의 빛(특정 방향에서 비추는 빛) */}
            <directionalLight
                color="red"
                position={[1, 2, 3]}
            />
        </>
    );
};

export default Shape;