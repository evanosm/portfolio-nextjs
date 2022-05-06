import {Canvas} from '@react-three/fiber';
import {PerspectiveCamera} from '@react-three/drei';
import Torus from './TorusObject';

const Scene = () => {
    return (
        <div style={{width : "100%", height: "100%"}}>
            <Canvas>
                <ambientLight />
                <pointLight position={[0, 0, 0]} color="white"  />
                <PerspectiveCamera position={[0, 0, 10]} />
                <Torus scale="10" color="#ff00ff"/>
                <Torus scale="15" color="#9900ff"/>
                <Torus scale="30" color="#5500ff"/>
            </Canvas>
        </div>
    );
};

export default Scene;