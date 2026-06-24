"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  useGLTF,
  Bounds,
} from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/model/flaut.glb");

  return (
    <Center>
      <primitive
        object={scene}
        scale={15}
        rotation={[0, Math.PI / 2, 0]}
        position={[0, -1, 0]}
      />
    </Center>
  );
}

export default function Flaut3D() {
  return (
    <div className="w-full h-[600px] rounded-3xl overflow-hidden">
      <Canvas camera={{ position: [0, 8, 18], fov: 45 }}>
        <ambientLight intensity={2} />

        <directionalLight
          position={[10, 10, 10]}
          intensity={2}
        />

        <directionalLight
          position={[-10, 10, -10]}
          intensity={1.5}
        />

        <Bounds fit clip observe margin={1.2}>
          <Model />
        </Bounds>

        <OrbitControls
          makeDefault
          target={[0, 0, 0]}
          enableZoom={true}
          enableRotate={true}
          enablePan={true}
          minDistance={5}
          maxDistance={50}
        />
      </Canvas>
    </div>
  );
}