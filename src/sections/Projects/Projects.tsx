import { myProjects } from "@/constants";
import { Suspense, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import { DemoComputer, CanvasLoader } from "@/components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const projectsCount = myProjects.length;

function Projects() {
  const [selectedProjectInd, setSelectedProjectInd] = useState(0);

  const handleNavigation = (direction: string) => {
    setSelectedProjectInd((prevInd) => {
      switch (direction) {
        case "prev": {
          return prevInd === 0 ? projectsCount - 1 : prevInd - 1;
        }
        default: {
          return prevInd === projectsCount - 1 ? 0 : prevInd + 1;
        }
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" },
    );
  }, [selectedProjectInd]);

  const currentProject = myProjects[selectedProjectInd];

  return (
    <section className="c-space my-20">
      <p className="head-text"> My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className={`${currentProject.isImage ? "" : "p-3"}  backdrop-filter backdrop-blur-3xl w-fit rounded-lg`}
            style={currentProject.logoStyle}
          >
            {currentProject.logo}
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map(({ id, Icon, name }) => {
                return (
                  <div className="tech-logo" key={id} aria-label={name}>
                    <Icon className="text-white" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("prev")}
            >
              <ArrowLeft className="h-4 w-4 text-white" />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <ArrowRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
        <div className="border-b-300 bg-slate-300 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={1.4} position={[0, -1, 0]} rotation={[0, 4.5, 0]}>
                  <DemoComputer />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Projects;
