import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CanvasLoader, Developer } from "@/components";

type DeveloperShowcaseProps = {
  animationName: string;
};

function DeveloperShowcase({ animationName }: DeveloperShowcaseProps) {
  return (
    <Canvas dpr={[1, 1.5]} performance={{ min: 0.5 }}>
      <ambientLight intensity={7} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      <Suspense fallback={<CanvasLoader />}>
        <Developer groupProps={{ scale: 3 }} animationName={animationName} />
      </Suspense>
    </Canvas>
  );
}

export default DeveloperShowcase;
