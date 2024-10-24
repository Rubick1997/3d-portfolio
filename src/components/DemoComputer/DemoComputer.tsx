import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { AnimationClip, Group, Material, Mesh, Object3DEventMap } from "three";

type GLTFResult = {
  nodes: {
    [key: string]: Mesh;
  };
  materials: {
    [key: string]: Material;
  };
  animations: AnimationClip[];
};

function DemoComputer(props: GroupProps) {
  const group = useRef<Group<Object3DEventMap> | null>(null);
  const { nodes, materials } = useGLTF(
    "/models/demo-computer/scene.gltf",
  ) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null} scale={0.09}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="1_uv_clip_b_0" position={[2.289, 7.615, 0.072]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="clip_b001_1" position={[2.289, 7.615, 0.072]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="key_2" position={[19.518, 1.674, 7.47]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key001_3" position={[19.518, 1.674, 6.125]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key002_4" position={[19.518, 1.674, 4.78]}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key003_5" position={[19.518, 1.674, 3.434]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key004_6" position={[19.518, 1.674, 2.089]}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key005_7" position={[19.518, 1.674, 0.744]}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key006_8" position={[19.518, 1.674, -0.601]}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key007_9" position={[19.518, 1.674, -1.946]}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key008_10" position={[19.518, 1.674, -3.291]}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key009_11" position={[19.518, 1.674, -4.637]}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key010_12" position={[19.518, 1.674, -5.982]}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="1side_c003_13" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="1side_c_14" position={[2.425, 13.631, 0.133]}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="1side_c001_15" position={[2.088, 6.581, 0.091]}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="1side_c002_16" position={[2.088, 6.772, 0.091]}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="clip_s001_17" position={[2.005, 6.892, -4.223]}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="clip_s002_18" position={[2.021, 6.892, -6.54]}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="clip_s003_19" position={[2.005, 6.892, 6.451]}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="clip_s004_20" position={[2.021, 6.892, 4.134]}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="clip_s005_21"
                position={[2.054, 5.008, -3.085]}
                rotation={[-0.862, 0, 0]}
              >
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="clip_s006_22"
                position={[2.054, 5.008, 3.28]}
                rotation={[-2.238, 0, 0]}
              >
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="clip_s007_23"
                position={[4.085, 7.369, -6.948]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="1_uv_clip_s_24"
                position={[4.085, 7.369, 7.133]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="key013_25" position={[20.755, 1.674, 7.164]}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key011_26" position={[20.755, 1.674, 5.819]}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key014_27" position={[20.755, 1.674, 4.474]}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key015_28" position={[20.755, 1.674, 3.138]}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key016_29" position={[20.755, 1.674, 1.802]}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key017_30" position={[20.755, 1.674, 0.448]}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key018_31" position={[20.755, 1.674, -0.906]}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key019_32" position={[20.755, 1.674, -2.251]}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key020_33" position={[20.755, 1.674, -3.587]}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key021_34" position={[20.755, 1.674, -4.941]}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key022_35" position={[20.755, 1.674, -6.277]}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key023_36" position={[20.551, 0.475, 6.095]}>
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key024_37" position={[20.551, 0.475, 4.716]}>
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key025_38" position={[20.551, 0.475, 3.373]}>
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key026_39" position={[20.551, 0.475, 2.036]}>
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key027_40" position={[20.551, 0.475, 0.678]}>
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key028_41" position={[20.551, 0.475, -0.666]}>
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key029_42" position={[20.551, 0.475, -2.013]}>
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key030_43" position={[20.551, 0.475, -3.364]}>
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key031_44" position={[20.551, 0.475, -4.675]}>
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key032_45" position={[20.551, 0.475, -6.012]}>
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key033_46" position={[20.551, 0.475, -7.358]}>
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key035_47" position={[23.192, 0.937, 6.47]}>
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key034_48" position={[23.192, 0.937, 5.101]}>
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key036_49" position={[23.192, 0.937, 3.748]}>
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key037_50" position={[23.192, 0.937, 2.411]}>
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key038_51" position={[23.192, 0.937, 1.051]}>
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key039_52" position={[23.192, 0.937, -0.294]}>
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key040_53" position={[23.192, 0.937, -1.646]}>
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key041_54" position={[23.192, 0.937, -2.982]}>
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key042_55" position={[23.192, 0.937, -4.31]}>
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key043_56" position={[23.192, 0.937, -5.654]}>
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key044_57" position={[23.192, 0.937, -7.039]}>
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="1_uv_Cube038_58" position={[8.092, 6.283, 0.091]}>
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Cube039_59" position={[8.092, 6.283, 0.091]}>
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Circle_60" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Circle001_61" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Cylinder049_62" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Cylinder052_63" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="audio_setting_handle_64"
                position={[8.092, 6.293, 0.091]}
              >
                <mesh
                  name="Object_132"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_132.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="1_uv_screw_65" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="screw002_66" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_136.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="screw001_67" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_138.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="screw004_68" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="screw003_69" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_142.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="screw005_70" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_144.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="1_uv_Cylinder058_71"
                position={[4.421, 1.065, -0.658]}
              >
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder059_72"
                position={[4.421, 1.065, 0.804]}
                rotation={[0, 0.553, 0]}
              >
                <mesh
                  name="Object_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_148.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder060_73"
                position={[2.477, 1.065, -0.658]}
                rotation={[0, 0.614, 0]}
              >
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_150.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder061_74"
                position={[2.446, 1.065, 0.804]}
                rotation={[0, 0.754, 0]}
              >
                <mesh
                  name="Object_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_152.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="1_uv_Cylinder062_75"
                position={[9.97, 20.397, -8.686]}
                rotation={[0, -0.5, 0]}
              >
                <mesh
                  name="Object_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_154.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder063_76"
                position={[9.97, 20.397, 8.893]}
                rotation={[0, 0.737, 0]}
              >
                <mesh
                  name="Object_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_156.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder064_77"
                position={[4.048, 17.872, 8.893]}
                rotation={[-Math.PI, 0.969, -Math.PI]}
              >
                <mesh
                  name="Object_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder065_78"
                position={[4.102, 17.867, -8.686]}
                rotation={[0, 0.759, 0]}
              >
                <mesh
                  name="Object_160"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_160.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder066_79"
                position={[4.102, 7.791, -8.686]}
                rotation={[-Math.PI, 1.205, -Math.PI]}
              >
                <mesh
                  name="Object_162"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_162.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder076_80"
                position={[4.048, 7.793, 8.893]}
                rotation={[-Math.PI, -0.503, -Math.PI]}
              >
                <mesh
                  name="Object_164"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_164.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder077_81"
                position={[13.929, 16.112, 8.769]}
                rotation={[-0.737, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_166"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_166.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder078_82"
                position={[13.929, 13.308, 8.769]}
                rotation={[-1.995, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_168"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_168.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder079_83"
                position={[13.929, 10.549, 8.769]}
                rotation={[-0.868, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_170"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_170.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder080_84"
                position={[13.929, 16.112, -8.585]}
                rotation={[-0.737, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_172"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_172.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder081_85"
                position={[13.929, 13.308, -8.585]}
                rotation={[-1.995, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_174"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_174.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder082_86"
                position={[13.929, 10.549, -8.585]}
                rotation={[-0.868, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_176"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_176.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder083_87"
                position={[1.506, 7.791, -0.703]}
                rotation={[-Math.PI, -0.359, -Math.PI]}
              >
                <mesh
                  name="Object_178"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_178.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder084_88"
                position={[1.506, 7.791, 0.912]}
                rotation={[-Math.PI, 0.336, -Math.PI]}
              >
                <mesh
                  name="Object_180"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_180.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder085_89"
                position={[1.425, 12.288, 4.932]}
                rotation={[-2.526, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_182"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_182.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cylinder086_90"
                position={[1.425, 12.288, -4.782]}
                rotation={[-0.52, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_184"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_184.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="1_uv_Cube062_91"
                position={[0.889, 4.041, -1.456]}
                rotation={[-0.79, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_186"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_186.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube063_92"
                position={[0.889, 4.041, 1.447]}
                rotation={[0.54, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_188"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_188.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube064_93"
                position={[0.889, 2.315, -1.456]}
                rotation={[0, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_190"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_190.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube065_94"
                position={[0.889, 2.315, 1.447]}
                rotation={[-2.142, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_192"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_192.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube066_95"
                position={[1.732, 4.563, 3.656]}
                rotation={[-0.54, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_194"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_194.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube067_96"
                position={[1.732, 4.563, 6.352]}
                rotation={[0.087, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_196"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_196.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube068_97"
                position={[1.732, 1.879, 3.656]}
                rotation={[2.572, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_198"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_198.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube069_98"
                position={[1.732, 1.879, 6.352]}
                rotation={[1.939, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_200"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_200.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube070_99"
                position={[1.732, 4.563, -6.185]}
                rotation={[-0.54, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_202"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_202.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube071_100"
                position={[1.732, 4.563, -3.489]}
                rotation={[0.087, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_204"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_204.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube072_101"
                position={[1.732, 1.879, -6.185]}
                rotation={[2.572, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_206"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_206.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube073_102"
                position={[1.732, 1.879, -3.489]}
                rotation={[1.939, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_208"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_208.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube075_103"
                position={[13.804, 4.237, 1.808]}
                rotation={[-0.524, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_210"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_210.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube077_104"
                position={[13.804, 3.303, 1.808]}
                rotation={[3.136, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_212"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_212.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube074_105"
                position={[13.804, 4.237, -1.599]}
                rotation={[-1.022, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_214"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_214.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube076_106"
                position={[13.804, 3.303, -1.599]}
                rotation={[-1.804, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_216"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_216.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube078_107"
                position={[0.955, 17.361, -4.855]}
                rotation={[-0.79, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_218"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube079_108"
                position={[0.955, 17.361, -4.227]}
                rotation={[-2.153, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_220"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_220.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube080_109"
                position={[0.955, 17.361, 4.408]}
                rotation={[-0.79, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_222"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_222.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube081_110"
                position={[0.955, 17.361, 5.036]}
                rotation={[-2.153, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_224"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_224.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="canvas_111" position={[8.026, 6.293, 0.091]}>
                <mesh
                  name="Object_226"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_226.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="canvas_count_112" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_228"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_228.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="1_uv_Cube026_113" position={[13.571, 16.11, -7.907]}>
                <mesh
                  name="Object_230"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_230.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Cube027_114" position={[13.571, 13.314, -7.907]}>
                <mesh
                  name="Object_232"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_232.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Cube028_115" position={[13.571, 10.553, -7.907]}>
                <mesh
                  name="Object_234"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_234.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube029_116"
                position={[13.571, 16.11, 8.115]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_236"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_236.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube030_117"
                position={[13.571, 13.314, 8.115]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_238"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_238.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Cube031_118"
                position={[13.571, 10.553, 8.115]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_240"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_240.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="1_uv_Cylinder029_119"
                position={[7.022, 2.045, 0.18]}
              >
                <mesh
                  name="Object_242"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_242.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Cylinder030_120" position={[7.022, 2.045, 0.18]}>
                <mesh
                  name="Object_244"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_244.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Cylinder031_121" position={[7.022, 2.045, 0.18]}>
                <mesh
                  name="Object_246"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_246.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Cylinder032_122" position={[7.022, 2.045, 0.18]}>
                <mesh
                  name="Object_248"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_248.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="Cylinder033_123" position={[7.022, 2.045, 0.18]}>
                <mesh
                  name="Object_250"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_250.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="cpu_body001_124" position={[7.022, 2.045, 0.18]}>
                <mesh
                  name="Object_252"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_252.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="cpu_info001_125" position={[7.022, 2.017, 0.18]}>
                <mesh
                  name="Object_254"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_254.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="from_cpu001_126"
                position={[7.022, 2.045, 0.18]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_256"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_256.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="cable_conector_mini001_127"
                position={[7.022, 1.968, 0.18]}
              >
                <mesh
                  name="Object_258"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_258.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="2side_cable_128" position={[7.022, 2.045, 0.18]}>
                <mesh
                  name="Object_260"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_260.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="lumen_64_129"
                position={[14.519, 19.995, 2.445]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_262"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_262.geometry}
                  material={materials.emis}
                />
              </group>
              <group name="electrod006_130" position={[3.266, 14.672, 0.091]}>
                <mesh
                  name="Object_264"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_264.geometry}
                  material={materials.emis}
                />
              </group>
              <group
                name="bottom_base001_131"
                position={[13.591, 0, 0.079]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_266"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_266.geometry}
                  material={materials.big_details}
                />
              </group>
              <group name="top_base001_132" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_268"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_268.geometry}
                  material={materials.big_details}
                />
              </group>
              <group name="stand001_133" position={[13.102, 0, 0.079]}>
                <mesh
                  name="Object_270"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_270.geometry}
                  material={materials.big_details}
                />
              </group>
              <group
                name="fence_count001_134"
                position={[13.591, 0, 0.079]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_272"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_272.geometry}
                  material={materials.big_details}
                />
              </group>
              <group
                name="side_fence001_135"
                position={[13.591, 0, 0.079]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_274"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_274.geometry}
                  material={materials.big_details}
                />
              </group>
              <group name="gears001_136" position={[8.005, 6.287, 0.091]}>
                <mesh
                  name="Object_276"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_276.geometry}
                  material={materials.big_details}
                />
              </group>
              <group
                name="count001_137"
                position={[1.074, 0.61, 0.004]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_278"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_278.geometry}
                  material={materials.big_details}
                />
              </group>
              <group name="cable001_138" position={[0.983, 0.61, 0.004]}>
                <mesh
                  name="Object_280"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_280.geometry}
                  material={materials.big_details}
                />
              </group>
              <group
                name="input001_139"
                position={[-5.115, -0.73, -5.855]}
                rotation={[2.054, -0.21, -0.378]}
              >
                <mesh
                  name="Object_282"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_282.geometry}
                  material={materials.big_details}
                />
              </group>
              <group name="handle_ram001_140" position={[8.485, 5.26, 0.091]}>
                <mesh
                  name="Object_284"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_284.geometry}
                  material={materials.big_details}
                />
              </group>
              <group
                name="strape001_141"
                position={[8.044, 6.334, 0.091]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_286"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_286.geometry}
                  material={materials.big_details}
                />
              </group>
              <group
                name="conect_handle001_142"
                position={[8.154, 6.336, 0.091]}
              >
                <mesh
                  name="Object_288"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_288.geometry}
                  material={materials.big_details}
                />
              </group>
              <group
                name="img_set_conector001_143"
                position={[8.092, 6.293, 0.091]}
              >
                <mesh
                  name="Object_290"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_290.geometry}
                  material={materials.big_details}
                />
              </group>
              <group
                name="top_audio_conect001_144"
                position={[8.092, 6.293, 0.091]}
              >
                <mesh
                  name="Object_292"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_292.geometry}
                  material={materials.big_details}
                />
              </group>
              <group
                name="bottom_audio_conect001_145"
                position={[8.092, 6.293, 0.091]}
              >
                <mesh
                  name="Object_294"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_294.geometry}
                  material={materials.big_details}
                />
              </group>
              <group
                name="border001_146"
                position={[13.591, 0, 0.079]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_296"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_296.geometry}
                  material={materials.big_details}
                />
              </group>
              <group name="back_set_fan001_147" position={[13.591, 0, 0.079]}>
                <mesh
                  name="Object_298"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_298.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="fan001_148" position={[1.365, 3.22, 4.991]}>
                <mesh
                  name="Object_300"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_300.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="fan_fence_border001_149"
                position={[13.591, 0, 0.079]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_302"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_302.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="fan_magnit001_150"
                position={[13.591, 0, 0.079]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_304"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_304.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="fan002_151"
                position={[1.365, 3.22, -4.836]}
                rotation={[Math.PI / 9, 0, 0]}
              >
                <mesh
                  name="Object_306"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_306.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="1_uv_number_plate_l001_152"
                position={[16.672, 3.923, 7.026]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_308"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_308.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="number_plate_r001_153"
                position={[16.672, 3.923, 6.241]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_310"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_310.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="shaft001_154"
                position={[16.672, 3.923, 6.892]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_312"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_312.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="cpu_usage_label001_155"
                position={[13.591, 0, 0.079]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_314"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_314.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="cpu_usage_count001_156"
                position={[13.583, -0.002, 9.247]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_316"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_316.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="wax_disk_count001_157"
                position={[13.591, 0, 0.079]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_318"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_318.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="wax_disk001_158"
                position={[16.421, 4.103, -4.351]}
                rotation={[-Math.PI / 2, 0.175, 0]}
              >
                <mesh
                  name="Object_320"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_320.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="plate001_159"
                position={[13.591, 0, -11.286]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_322"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_322.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="tumbler001_160"
                position={[17.309, 4.657, -8.198]}
                rotation={[0.77, 0.467, -1.136]}
              >
                <mesh
                  name="Object_324"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_324.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Sphere016_161"
                position={[16.171, 5.089, 4.356]}
                rotation={[0, 0, -0.561]}
              >
                <mesh
                  name="Object_326"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_326.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Sphere012_162"
                position={[16.171, 5.089, 4.356]}
                rotation={[0, 0, -0.561]}
              >
                <mesh
                  name="Object_328"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_328.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="left_needle001_163"
                position={[16.421, 4.103, -1.694]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_330"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_330.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="right_needle001_164"
                position={[16.421, 4.103, -7.184]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
              >
                <mesh
                  name="Object_332"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_332.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Sphere011_165"
                position={[16.171, 5.089, -8.213]}
                rotation={[0, 0, -0.561]}
              >
                <mesh
                  name="Object_334"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_334.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Sphere013_166"
                position={[16.171, 5.089, 3.016]}
                rotation={[0, 0, -0.561]}
              >
                <mesh
                  name="Object_336"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_336.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Sphere014_167"
                position={[16.171, 5.089, 1.699]}
                rotation={[0, 0, -0.561]}
              >
                <mesh
                  name="Object_338"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_338.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Sphere015_168"
                position={[16.171, 5.089, 0.373]}
                rotation={[0, 0, -0.561]}
              >
                <mesh
                  name="Object_340"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_340.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="1_uv_switcher001_169"
                position={[17.164, 4.638, 4.361]}
                rotation={[Math.PI, 0, -2.212]}
              >
                <mesh
                  name="Object_342"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_342.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="switcher004_170"
                position={[17.164, 4.638, 3.035]}
                rotation={[0, 0, -0.929]}
              >
                <mesh
                  name="Object_344"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_344.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="switcher005_171"
                position={[17.164, 4.638, 1.709]}
                rotation={[0, 0, -0.929]}
              >
                <mesh
                  name="Object_346"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_346.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="switcher006_172"
                position={[17.164, 4.638, 0.383]}
                rotation={[0, 0, -0.929]}
              >
                <mesh
                  name="Object_348"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_348.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="1_uv_Cylinder001_173"
                position={[6.616, 2.818, 0.748]}
                rotation={[0, -0.105, 0]}
              >
                <mesh
                  name="Object_350"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_350.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Cylinder009_174"
                position={[7.382, 2.732, 0.085]}
                rotation={[0, -0.175, 0]}
              >
                <mesh
                  name="Object_352"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_352.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Cylinder012_175"
                position={[6.98, 2.721, -0.399]}
                rotation={[0, 0.035, 0]}
              >
                <mesh
                  name="Object_354"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_354.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Cylinder001_176"
                position={[6.489, 2.829, -0.027]}
                rotation={[0, 0.105, 0]}
              >
                <mesh
                  name="Object_356"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_356.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Cylinder004_177"
                position={[7.417, 2.829, 0.64]}
                rotation={[0, 0.07, 0]}
              >
                <mesh
                  name="Object_358"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_358.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Cylinder005_178"
                position={[6.926, 2.829, 0.234]}
                rotation={[0, 0.175, 0]}
              >
                <mesh
                  name="Object_360"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_360.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Cylinder006_179"
                position={[7.716, 2.829, -0.261]}
                rotation={[0, 0.175, 0]}
              >
                <mesh
                  name="Object_362"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_362.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="disk_tube_glass_180"
                position={[3.266, 14.672, 0.091]}
              >
                <mesh
                  name="Object_364"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_364.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="label_glass_181" position={[8.605, 6.709, 0.091]}>
                <mesh
                  name="Object_366"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_366.geometry}
                  material={materials.glass}
                />
              </group>
              <group
                name="lins_b_glass_182"
                position={[7.219, 14.807, 0.091]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_368"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_368.geometry}
                  material={materials.glass}
                />
              </group>
              <group
                name="lins_s_glass_183"
                position={[6.339, 14.807, 0.091]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_370"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_370.geometry}
                  material={materials.glass}
                />
              </group>
              <group
                name="cpu_glass_184"
                position={[7.022, 2.019, 0.18]}
                scale={[1.026, 1, 1.026]}
              >
                <mesh
                  name="Object_372"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_372.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="1_185" position={[7.022, 2.045, 0.18]}>
                <mesh
                  name="Object_374"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_374.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="2_186" position={[7.022, 2.045, 0.18]}>
                <mesh
                  name="Object_376"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_376.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="4_187" position={[7.022, 2.045, 0.18]}>
                <mesh
                  name="Object_378"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_378.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="3_188" position={[7.022, 2.045, 0.18]}>
                <mesh
                  name="Object_380"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_380.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="imagedisk_189"
                position={[4.708, 14.754, 0.091]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_382"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_382.geometry}
                  material={materials.image}
                />
              </group>
              <group
                name="imagedisk_anim_190"
                position={[4.716, 14.752, 0.091]}
              >
                <mesh
                  name="Object_384"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_384.geometry}
                  material={materials.image}
                />
              </group>
              <group name="image_monitor_191" position={[14.325, 13.366, 0.09]}>
                <mesh
                  name="Object_386"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_386.geometry}
                  material={materials.image}
                />
              </group>
              <group
                name="image_monitor_anim_192"
                position={[14.4, 13.417, 0.125]}
              >
                <mesh
                  name="Object_388"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_388.geometry}
                  material={materials.image}
                />
              </group>
              <group
                name="roller_193"
                position={[8.092, 6.293, 0.091]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_390"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_390.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="roller001_194" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_392"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_392.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="main_img_set_handle_195"
                position={[1.516, 18.516, 0.115]}
              >
                <mesh
                  name="Object_394"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_394.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="img_set_rope_196" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_396"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_396.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="Sphere002_197"
                position={[16.171, 5.089, 3.016]}
                rotation={[0, 0, -0.561]}
              >
                <mesh
                  name="Object_398"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_398.geometry}
                  material={materials.emis}
                />
              </group>
              <group
                name="Sphere007_198"
                position={[16.171, 5.089, 1.699]}
                rotation={[0, 0, -0.561]}
              >
                <mesh
                  name="Object_400"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_400.geometry}
                  material={materials.emis}
                />
              </group>
              <group
                name="Sphere008_199"
                position={[16.171, 5.089, 0.373]}
                rotation={[0, 0, -0.561]}
              >
                <mesh
                  name="Object_402"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_402.geometry}
                  material={materials.emis}
                />
              </group>
              <group
                name="Sphere009_200"
                position={[16.171, 5.089, -8.213]}
                rotation={[0, 0, -0.561]}
              >
                <mesh
                  name="Object_404"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_404.geometry}
                  material={materials.emis}
                />
              </group>
              <group
                name="key_board_count_201"
                position={[13.591, 0, 0.079]}
                rotation={[Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_406"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_406.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="label_podium_202" position={[14.003, 20.153, 0.017]}>
                <mesh
                  name="Object_408"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_408.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="label_count_203" position={[8.113, 6.293, 0.091]}>
                <mesh
                  name="Object_410"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_410.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group
                name="electrod_204"
                position={[5.764, 1.948, 5.079]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_412"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_412.geometry}
                  material={materials.emis}
                />
              </group>
              <group
                name="electrod001_205"
                position={[7.904, 1.948, 5.079]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_414"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_414.geometry}
                  material={materials.emis}
                />
              </group>
              <group
                name="electrod002_206"
                position={[10.048, 1.948, 5.079]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_416"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_416.geometry}
                  material={materials.emis}
                />
              </group>
              <group
                name="electrod003_207"
                position={[5.764, 1.948, -4.93]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_418"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_418.geometry}
                  material={materials.emis}
                />
              </group>
              <group
                name="electrod004_208"
                position={[7.904, 1.948, -4.93]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_420"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_420.geometry}
                  material={materials.emis}
                />
              </group>
              <group
                name="electrod005_209"
                position={[10.048, 1.948, -4.93]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_422"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_422.geometry}
                  material={materials.emis}
                />
              </group>
              <group name="glass_210" position={[5.764, 2.247, 5.079]}>
                <mesh
                  name="Object_424"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_424.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="glass001_211" position={[7.904, 2.247, 5.079]}>
                <mesh
                  name="Object_426"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_426.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="glass002_212" position={[10.048, 2.247, 5.079]}>
                <mesh
                  name="Object_428"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_428.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="glass003_213" position={[5.764, 2.247, -4.93]}>
                <mesh
                  name="Object_430"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_430.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="glass004_214" position={[7.904, 2.247, -4.93]}>
                <mesh
                  name="Object_432"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_432.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="glass005_215" position={[10.048, 2.247, -4.93]}>
                <mesh
                  name="Object_434"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_434.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="key045_216" position={[21.478, 0.979, 1.099]}>
                <mesh
                  name="Object_436"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_436.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group
                name="key046_217"
                position={[19.45, 2.751, -7.751]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_438"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_438.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key012_218" position={[21.478, 0.979, 1.099]}>
                <mesh
                  name="Object_440"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_440.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key047_219" position={[22.595, 0.464, 7.336]}>
                <mesh
                  name="Object_442"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_442.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group name="key048_220" position={[22.442, 0.979, -0.742]}>
                <mesh
                  name="Object_444"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_444.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group
                name="disk_body_221"
                position={[4.614, 12.302, 0.091]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_446"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_446.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="disk_rotor_222" position={[2.323, 12.284, 0.091]}>
                <mesh
                  name="Object_448"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_448.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="magnet_223"
                position={[1.794, 12.302, 0.091]}
                rotation={[-0.046, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_450"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_450.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="image_disk_224"
                position={[1.359, 12.302, 0.091]}
                rotation={[0.175, 0, 0]}
              >
                <mesh
                  name="Object_452"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_452.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="rotor_shaft_225"
                position={[3.691, 12.302, 0.091]}
                rotation={[0.175, 0, 0]}
              >
                <mesh
                  name="Object_454"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_454.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="rotor_front_skrew_226"
                position={[4.763, 12.302, 0.091]}
                rotation={[0.175, 0, 0]}
              >
                <mesh
                  name="Object_456"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_456.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="rotor_skrew_227"
                position={[1.149, 12.302, 0.091]}
                rotation={[0.175, 0, 0]}
              >
                <mesh
                  name="Object_458"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_458.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="frpm_main_body001_228"
                position={[7.022, 2.045, 0.18]}
                rotation={[Math.PI, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_460"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_460.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="made_in_plate001_229"
                position={[1.902, 3.166, 0.004]}
              >
                <mesh
                  name="Object_462"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_462.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="main_panel_plate001_230"
                position={[13.591, 0, -2.299]}
                rotation={[-Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_464"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_464.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="voltage_warning001_231"
                position={[14.809, 3.323, -0.431]}
              >
                <mesh
                  name="Object_466"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_466.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="ram_base002_232" position={[11.854, 0.522, 0.181]}>
                <mesh
                  name="Object_468"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_468.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="ram_base003_233" position={[12.779, 0.522, 0.181]}>
                <mesh
                  name="Object_470"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_470.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="ram_card002_234">
                <mesh
                  name="Object_472"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_472.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="ram_card003_235" position={[0, -0.001, 0]}>
                <mesh
                  name="Object_474"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_474.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="rays_anim_236"
                position={[9.247, 13.551, 0.199]}
                scale={1.002}
              >
                <mesh
                  name="Object_476"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_476.geometry}
                  material={materials.rays}
                />
              </group>
              <group
                name="rays001_opac_237"
                position={[9.173, 13.506, 0.199]}
                scale={1.002}
              >
                <mesh
                  name="Object_478"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_478.geometry}
                  material={materials.rays}
                />
              </group>
              <group name="long_plate_238" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_480"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_480.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="2_side_conect_239" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_482"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_482.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="conector_big_bolt_240"
                position={[8.092, 6.293, 0.091]}
              >
                <mesh
                  name="Object_484"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_484.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="rope_conect_241" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_486"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_486.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="disk_x-side_conect_242"
                position={[3.691, 12.302, 0.091]}
              >
                <mesh
                  name="Object_488"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_488.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="disk_y-side_conect_243"
                position={[3.691, 12.302, 0.091]}
              >
                <mesh
                  name="Object_490"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_490.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="disk_cable_conector_244"
                position={[1.682, 13.534, 0.091]}
              >
                <mesh
                  name="Object_492"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_492.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="rail_body_245" position={[4.614, 12.335, 0.091]}>
                <mesh
                  name="Object_494"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_494.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="rail_facture_246" position={[4.614, 12.335, 0.091]}>
                <mesh
                  name="Object_496"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_496.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="rail_gear_247" position={[1.408, 12.266, 0.091]}>
                <mesh
                  name="Object_498"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_498.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="speaker_248" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_500"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_500.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="speaker001_249" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_502"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_502.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="speaker_body_250" position={[8.092, 6.293, 0.091]}>
                <mesh
                  name="Object_504"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_504.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="trans_cable_251" position={[8.092, 6.293, 0.181]}>
                <mesh
                  name="Object_506"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_506.geometry}
                  material={materials.cable_bolt_canvas}
                />
              </group>
              <group name="main_winding001_252" position={[3.414, 2.753, 0.21]}>
                <mesh
                  name="Object_508"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_508.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="trans_count_plate001_253"
                position={[3.414, 2.753, 0.103]}
              >
                <mesh
                  name="Object_510"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_510.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="trans_podium001_254"
                position={[3.458, 1.315, 0.057]}
              >
                <mesh
                  name="Object_512"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_512.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="winding001_255" position={[3.413, 2.334, 0.103]}>
                <mesh
                  name="Object_514"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_514.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="base_tubes002_256" position={[13.591, 0, 0.079]}>
                <mesh
                  name="Object_516"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_516.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="gear006_257" position={[5.764, 1.948, 5.079]}>
                <mesh
                  name="Object_518"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_518.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="gear007_258" position={[7.904, 1.948, 5.079]}>
                <mesh
                  name="Object_520"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_520.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="gear008_259" position={[10.048, 1.948, 5.079]}>
                <mesh
                  name="Object_522"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_522.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="gear009_260" position={[5.764, 1.948, -4.93]}>
                <mesh
                  name="Object_524"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_524.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="gear010_261" position={[7.904, 1.948, -4.93]}>
                <mesh
                  name="Object_526"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_526.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="gear011_262" position={[10.048, 1.948, -4.93]}>
                <mesh
                  name="Object_528"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_528.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="add006_263"
                position={[5.764, 1.948, 5.079]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_530"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_530.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="add007_264"
                position={[7.904, 1.948, 5.079]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_532"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_532.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="add008_265"
                position={[10.048, 1.948, 5.079]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_534"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_534.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="add009_266"
                position={[5.764, 1.948, -4.93]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_536"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_536.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="add010_267"
                position={[7.904, 1.948, -4.93]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_538"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_538.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="add011_268"
                position={[10.048, 1.948, -4.93]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_540"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_540.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="base001_269" position={[5.764, 1.958, 5.079]}>
                <mesh
                  name="Object_542"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_542.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="base007_270" position={[7.904, 1.958, 5.079]}>
                <mesh
                  name="Object_544"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_544.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="base008_271" position={[10.048, 1.958, 5.079]}>
                <mesh
                  name="Object_546"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_546.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="base009_272" position={[5.764, 1.958, -4.93]}>
                <mesh
                  name="Object_548"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_548.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="base010_273" position={[7.904, 1.958, -4.93]}>
                <mesh
                  name="Object_550"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_550.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="base011_274" position={[10.048, 1.958, -4.93]}>
                <mesh
                  name="Object_552"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_552.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="tube_body_275" position={[3.266, 14.689, 0.091]}>
                <mesh
                  name="Object_554"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_554.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group name="lins_conect_276" position={[4.192, 15.593, 0.091]}>
                <mesh
                  name="Object_556"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_556.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="tube_amp_277"
                position={[2.036, 14.672, 0.091]}
                rotation={[0, 0, Math.PI / 2]}
              >
                <mesh
                  name="Object_558"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_558.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="s_lins_count_278"
                position={[6.095, 14.807, 0.091]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_560"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_560.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="b_lins_count_279"
                position={[7.161, 14.807, 0.091]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_562"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_562.geometry}
                  material={materials.disk_and_audio}
                />
              </group>
              <group
                name="1_cable_clips_uv001_280"
                position={[2.131, 6.823, 1.797]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_564"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_564.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="cable_clips002_281" position={[2.175, 7.615, 0.102]}>
                <mesh
                  name="Object_566"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_566.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="cable_clips003_282"
                position={[2.157, 6.823, -1.504]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
              >
                <mesh
                  name="Object_568"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_568.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group
                name="Cube001_283"
                position={[2.153, 6.023, 0.102]}
                rotation={[Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_570"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_570.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
              <group name="voltage_hub001_284" position={[2.39, 6.789, 0.145]}>
                <mesh
                  name="Object_572"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_572.geometry}
                  material={materials.panel_and_bottom_details}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/demo-computer/scene.gltf");

export default DemoComputer;
