import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import {
  CanvasLoader,
  Computer,
  GitModel,
  HeroCamera,
  JavascriptModel,
  PythonModel,
  ReactModel,
} from "@/components";
import { calculateSizes } from "@/constants";

type HeroSceneProps = {
  isSmall: boolean;
  isMobile: boolean;
  isTablet: boolean;
};

function HeroScene({ isSmall, isMobile, isTablet }: HeroSceneProps) {
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <Canvas
      className="w-full h-full"
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        <HeroCamera isMobile={isMobile}>
          <Computer
            position={sizes.deskPosition as Vector3}
            rotation={[0, 0, 0]}
            scale={sizes.deskScale}
          />
        </HeroCamera>
        {!isMobile && (
          <>
            <ReactModel position={sizes.reactLogoPosition as Vector3} />
            <PythonModel position={sizes.pythonPosition as Vector3} />
            <GitModel position={sizes.gitPosition as Vector3} />
            <JavascriptModel position={sizes.jsPosition as Vector3} />
          </>
        )}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
      </Suspense>
    </Canvas>
  );
}

export default HeroScene;
