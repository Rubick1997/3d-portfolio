import { useGLTF, Float } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Material, Mesh } from "three";

type GLTFResult = {
  nodes: {
    Object_4: Mesh;
  };
  materials: {
    "SVGMat.006": Material;
  };
};

function GitModel(props: GroupProps) {
  const { nodes, materials } = useGLTF(
    "/models/git/scene.gltf",
  ) as unknown as GLTFResult;
  return (
    <Float floatIntensity={2}>
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["SVGMat.006"]}
            rotation={[0, 0, 0]}
            scale={34}
          />
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("/models/git/scene.gltf");

export default GitModel;
