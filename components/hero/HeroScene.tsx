'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function Globe({ pointer }: { pointer: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh | null>(null);
  const dots = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < 400; i += 1) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      points.push(new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * 1.45,
        Math.sin(phi) * Math.sin(theta) * 1.45,
        Math.cos(phi) * 1.45,
      ));
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.18, 0.08);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, pointer.x * 0.08, 0.08);
    }
    if (ring.current) {
      ring.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.1} rotationIntensity={0.1} floatIntensity={0.9}>
        <mesh>
          <sphereGeometry args={[1.7, 64, 64]} />
          <meshStandardMaterial
            roughness={0.25}
            metalness={0.8}
            color="#6C63FF"
            emissive="#2B2C8E"
            emissiveIntensity={0.35}
            transparent
            opacity={0.82}
            envMapIntensity={1.2}
          />
        </mesh>
        <mesh scale={1.04}>
          <sphereGeometry args={[1.7, 64, 64]} />
          <meshBasicMaterial color="#00F5D4" transparent opacity={0.06} />
        </mesh>
      </Float>

      <mesh ref={ring}>
        <torusGeometry args={[2.3, 0.04, 64, 120]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.24} side={THREE.DoubleSide} />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(dots.flatMap((point) => [point.x, point.y, point.z]))}
            count={dots.length}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#FFFFFF" sizeAttenuation transparent opacity={0.85} />
      </points>
    </group>
  );
}

export default function HeroScene() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * -2;
      setPointer({ x, y });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        className="h-full w-full"
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.8} />
        <pointLight position={[-6, 4, 5]} color="#6C63FF" intensity={1.8} />
        <pointLight position={[6, -4, 5]} color="#00F5D4" intensity={1.4} />
        <Stars radius={75} depth={40} count={2500} factor={4} saturation={0} fade speed={0.2} />
        <Globe pointer={pointer} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
