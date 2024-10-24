import { ReactNode, useRef } from "react";
import { Group, Object3DEventMap } from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

function HeroCamera({ children, isMobile }: Props) {
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta);

    if (!isMobile) {
      easing.dampE(
        groupRef.current!.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta,
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export default HeroCamera;

type Props = {
  children: ReactNode;
  isMobile: boolean;
};
