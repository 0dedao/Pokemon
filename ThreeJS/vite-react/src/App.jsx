import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

const RotatingCube = () => {
 const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current){
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.005;
    }
  })

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles count={100} scale={1} size={6} speed={0.001} 
      noise={0.1} color="#ffffff" />

    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', display: 'flex', 
    justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <color attach="background" args={["pink"]} />

      <RotatingCube />
    </Canvas>
  );
};

export default App;
