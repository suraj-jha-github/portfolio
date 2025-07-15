import { Canvas } from "@react-three/fiber";
import { Boy } from "./models/Boy";
import { Suspense } from "react";

const HeroExperience = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight position={[-2, 0, 3]} intensity={3} color={"#FF28D5"} />
        <directionalLight position={[2, 0, 3]} intensity={3} color={"#1C34FF"} />

        <group>
          <Boy scale={9} position={[0, -15, 0]} />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
