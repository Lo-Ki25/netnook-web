import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Octahedron, Torus } from '@react-three/drei';
import { Group } from 'three';
import { animated, useSpring } from '@react-spring/three';

export function Shapes() {
  const groupRef = useRef<Group>(null);

  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.001;
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <animated.group ref={groupRef} scale={scale}>
      <Icosahedron args={[1, 1]} position={[-4, 2, -5]}>
        <meshPhongMaterial
          color="#00ffff"
          emissive="#001133"
          specular="#ffffff"
          shininess={100}
          opacity={0.6}
          transparent
          wireframe
        />
      </Icosahedron>

      <Octahedron args={[1]} position={[4, -2, -5]}>
        <meshPhongMaterial
          color="#ff00ff"
          emissive="#110033"
          specular="#ffffff"
          shininess={100}
          opacity={0.6}
          transparent
          wireframe
        />
      </Octahedron>

      <Torus args={[1, 0.2, 16, 100]} position={[0, -4, -5]}>
        <meshPhongMaterial
          color="#ffff00"
          emissive="#331100"
          specular="#ffffff"
          shininess={100}
          opacity={0.6}
          transparent
          wireframe
        />
      </Torus>
    </animated.group>
  );
}