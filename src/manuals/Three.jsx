/*
   [Three.jsx 사용법]
   1. `npm install three @react-three/fiber @react-three/drei`
    `npm install -g gltf-pipeline`
    - drei는 자주 쓰는 기능을 미리 만들어 놓은 것
    - pineline은 외부의 gltf 파일 가져올 때 최적화 하여 가져오는 것으로, 프로젝트가 아닌 컴퓨터 자체에 설치. 자세한 내용은 youtube의 lama dev porfolio 검색
   2. import { Canvas } from '@react-three/fiber'
      import { OrbitControls } from '@react-three/drei'
   3. <Canvas></Canvas>로 3D 공간을 생성
     - 이 때, 크기는 부모 요소와 동일하게 잡힘
   4. Canvas 안에 <mesh> </mesh>로 3D 물체를 생성
     - 위치 설정은 여기서
   5. mesh 안에 <boxGeometry /> 등의 Geometry로 3D 물체를 생성
     - 크기 설정는 여기서
   6. 기타 설정 관련
    - <meshBasicMaterial /> : 3D 물체의 색상, 텍스처 등 설정
    - <ambientLight /> : 3D 물체의 빛(전체 동일)
    - <directionalLight /> : 3D 물체의 빛(특정 방향에서 비추는 빛)
    - <OrbitControls /> : 3D 물체를 마우스로 움직일 수 있게 해줌
    - <MeshDistortMaterial/> : 3D 물체의 왜곡
 */

// import
import { Canvas } from '@react-three/fiber';
import {MeshDistortMaterial, OrbitControls} from '@react-three/drei';

const Test = () => {
    return (
        <div>
            {/* Canvas : 3D가 배치되는 도화지 공간. 크기는 부모 요소와 동일하게 잡힘 */}
            <Canvas>
                {/* mesh : 도화지 위에 그려지는 3D 물체 - 위치 설정은 여기서*/}
                <mesh>
                    {/* boxGeometry : box 형태의 3D 물체 - 크기 설정는 여기서 */}
                    <boxGeometry args={[2, 2, 2]}/>
                    {/* meshBasicMaterial : 3D 물체의 색상, 텍스텨 등 설정 */}
                    <meshBasicMaterial color="hotpink" />
                    {/* ambientLight : 3D 물체의 빛 */}
                    <ambientLight intensity={0.5} />
                    {/* directionalLight : 3D 물체의 빛(특정 방향에서 비추는 빛) */}
                    <directionalLight
                        color="red"
                        position={[-2, 5, 2]}
                        intensity={1}
                    />
                    {/* OrbitControls : 3D 물체를 마우스로 움직일 수 있게 해줌 */}
                    <OrbitControls enableZoom={false}/>
                    {/* MeshDistortMaterial : 3D 물체의 왜곡 */}
                    <MeshDistortMaterial
                        color="hotpink"
                        distort={0.5}
                        attach="material"
                    />
                </mesh>
            </Canvas>
        </div>
    );
};

export default Test;