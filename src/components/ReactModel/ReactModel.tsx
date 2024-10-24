import { GroupProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group, Material, Mesh, Object3DEventMap } from "three";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type GLTFResult = {
  nodes: {
    "React-Logo_Material002_0": Mesh;
  };
  materials: {
    "Material.002": Material;
  };
};

function ReactModel(props: GroupProps) {
  const reactModelRef = useRef<Group<Object3DEventMap> | null>(null);
  const { nodes, materials } = useGLTF(
    "/models/react/scene.gltf",
  ) as unknown as GLTFResult;

  useGSAP(() => {
    gsap.to(reactModelRef.current!.position, {
      y: reactModelRef.current!.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} dispose={null} ref={reactModelRef} rotation={[0, 7, 0]}>
      <group scale={0.01}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={40}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/react/scene.gltf");

export default ReactModel;
