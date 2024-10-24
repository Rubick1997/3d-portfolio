import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Mesh, Material, Group, Object3DEventMap } from "three";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type GLTFResult = {
  nodes: {
    Python_Python_0: Mesh;
  };
  materials: {
    Python: Material;
  };
};

function PythonModel(props: GroupProps) {
  const pythonModelRef = useRef<Group<Object3DEventMap> | null>(null);
  const [hovered, setHovered] = useState(false);
  const { nodes, materials } = useGLTF(
    "/models/python/scene.gltf",
  ) as unknown as GLTFResult;

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -2,
        repeatDelay: 0,
      })
      .to(pythonModelRef.current!.rotation, {
        yoyo: true,
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <group {...props} dispose={null} ref={pythonModelRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <group scale={0.01}>
        <mesh
          geometry={nodes.Python_Python_0.geometry}
          material={materials.Python}
          rotation={[5, 2, 6]}
          scale={4}
          onPointerEnter={() => setHovered(true)}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/python/scene.gltf");

export default PythonModel;
