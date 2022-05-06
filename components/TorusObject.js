import {Torus, MeshWobbleMaterial} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const TorusObject = (props) => {

    const TorusRef = useRef();
    useFrame(() => {
        TorusRef.current.rotation.x += 0.005;
        TorusRef.current.rotation.y += 0.0025;
    });

    return (
        <mesh>
            <Torus ref={TorusRef} args={[1.3, .2, 16, 500]} scale={props.scale} > 
                <MeshWobbleMaterial factor={5} speed={.3} color={props.color}    />
            </Torus> 
        </mesh>
    );
};

export default TorusObject;