import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Points } from 'three';
import { animated, useSpring } from '@react-spring/three';

export function Globe() {
  const pointsRef = useRef<Points>(null);
  
  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <animated.group scale={scale}>
      <Sphere args={[2, 64, 64]}>
        <meshPhongMaterial
          color="#0066cc"
          emissive="#001133"
          specular="#ffffff"
          shininess={100}
          opacity={0.9}
          transparent
          wireframe
        />
      </Sphere>
      <points ref={pointsRef}>
        <sphereGeometry args={[2.1, 64, 64]} />
        <pointsMaterial size={0.02} color="#00ffff" />
      </points>
    </animated.group>
  );
}