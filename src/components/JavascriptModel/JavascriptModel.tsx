import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Group, Material, Mesh, Object3DEventMap } from "three";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type GLTFResult = {
  nodes: {
    Object_2: Mesh;
  };
  materials: {
    mat_3220964: Material;
  };
};

function JavascriptModel(props: GroupProps) {
  const jsModelRef = useRef<Group<Object3DEventMap> | null>(null);
  const [hovered, setHovered] = useState(false);

  const { nodes, materials } = useGLTF(
    "/models/javascript/scene.gltf",
  ) as unknown as GLTFResult;

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(jsModelRef.current!.rotation, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <group {...props} dispose={null} ref={jsModelRef}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.mat_3220964}
        rotation={[0, 0, 0]}
        scale={0.12}
        onPointerEnter={() => setHovered(true)}
      />
    </group>
  );
}

useGLTF.preload("/models/javascript/scene.gltf");

export default JavascriptModel;
