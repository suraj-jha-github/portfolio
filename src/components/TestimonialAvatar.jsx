import { Canvas } from "@react-three/fiber";
import { ContactBoy } from "./models/ContactBoy";
import { Suspense } from "react";

const TestimonialAvatar = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 0, 3]} intensity={2} color={"#FF28D5"} />
          <directionalLight position={[2, 0, 3]} intensity={2} color={"#1C34FF"} />

          <group position={position} rotation={rotation}>
            <ContactBoy scale={3} position={[0, -2, 0]} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TestimonialAvatar; 