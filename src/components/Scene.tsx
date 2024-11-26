import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import { Globe } from './Globe';
import { Shapes } from './Shapes';

export function Scene() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float
          speed={4}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <Globe />
        </Float>
        <Shapes />
      </Canvas>
    </div>
  );
}