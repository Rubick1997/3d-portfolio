import { useGLTF, useTexture } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Material, Mesh } from "three";

type GLTFResult = {
  nodes: {
    Plane_ShadowMaterial_0: Mesh;
    Plane_BackgroundMaterial_0: Mesh;
    Comp_Screen000_TerminalMaterial_0: Mesh;
    Comp_Screen002_TerminalMaterial_0: Mesh;
    scifi_computer_screen_0: Mesh;
    scifi_computer_computer_0: Mesh;
    scifi_computer_keyboard_0: Mesh;
    scifi_computer_keys_0: Mesh;
  };
  materials: {
    ShadowMaterial: Material;
    BackgroundMaterial: Material;
    TerminalMaterial: Material;
    screen: Material;
    computer: Material;
    keyboard: Material;
    keys: Material;
  };
};

function Computer(props: GroupProps) {
  const { nodes, materials } = useGLTF(
    "/models/computer/scene.gltf",
  ) as unknown as GLTFResult;

  const texture = useTexture(
    "/models/computer/textures/Rustam_photo.png",
    (texture) => {
      texture.repeat.set(1, 1);
      texture.offset.set(0, 0.4);
    },
  );

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.scifi_computer_screen_0.geometry}
          material={materials.screen}
        >
          <meshMatcapMaterial map={texture} />
        </mesh>
        <mesh
          geometry={nodes.scifi_computer_computer_0.geometry}
          material={materials.computer}
        />
        <mesh
          geometry={nodes.scifi_computer_keyboard_0.geometry}
          material={materials.keyboard}
        />
        <mesh
          geometry={nodes.scifi_computer_keys_0.geometry}
          material={materials.keys}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer/scene.gltf");

export default Computer;
