import { Typewriter } from "react-simple-typewriter";
import { Canvas, Vector3 } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import {
  Button,
  Computer,
  GitModel,
  HeroCamera,
  JavascriptModel,
  PythonModel,
  ReactModel,
  CanvasLoader,
} from "@/components";
import { Suspense } from "react";

// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/constants";

function Hero() {
  // const controls = useControls("Computer", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 768, minWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full  flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans [&>span]:waving-hand">
          <Typewriter
            words={["Hi, I am Rustam"]}
            loop={1}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          <Typewriter
            words={[
              "Full-Stack Engineer",
              "Frontend Development",
              "CI/CD",
              "Test-Driven Development",
              "Scalability Optimization",
              "API Design & Development",
              "Full-Stack Engineer",
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
      <div className="w-full h-full inset-0 absolute">
        {/*<Leva />*/}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <Computer
                position={sizes.deskPosition as Vector3}
                rotation={[0, 0, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <ReactModel position={sizes.reactLogoPosition as Vector3} />
            <PythonModel position={sizes.pythonPosition as Vector3} />
            <GitModel position={sizes.gitPosition as Vector3} />
            <JavascriptModel position={sizes.jsPosition as Vector3} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClassName="sm:w-fit w-full sm:wim-w-96"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
