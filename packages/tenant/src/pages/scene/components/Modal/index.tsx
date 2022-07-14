import { useCubeTexture, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Select } from "@react-three/postprocessing";
import { Group, Material, MeshStandardMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";

type onLoad = (gltf: any) => void;
type select = {
  [index: string]: { value: boolean };
};
type ModelProps = {
  path: string;
  onLoad: onLoad;
  select: select;
};

const material = () => (
  <meshStandardMaterial
    envMap={useCubeTexture(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"], { path: "cube/" })}
    roughness={0}
    metalness={0.9}
    color="#010101"
  />
);
const Model = (props: ModelProps) => {
  const { path, onLoad, select, ...restProps } = props;
  const group = useRef<Group>(null);
  let gltf = useGLTF(path) as any;
  const envMap = useCubeTexture(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"], { path: "cube/" });
  useFrame(({ clock }) => {
    if (!group.current) {
      return;
    }
    // group.current.position.y > 50 ? group.current.position.y-- : group.current.position.y++;
    // = clock.getElapsedTime() + 2;
    console.log(clock.getDelta());
    console.log(clock.getElapsedTime());
    group.current.rotateY(1 / (2 * 60));
  });
  // console.log(gltf)
  useEffect(() => {
    gltf = useGLTF(path) as any;
    if (onLoad) {
      onLoad(gltf);
    }
  }, [path]);

  const { nodes } = gltf;
  return (
    <group ref={group} {...restProps} dispose={null}>
      {gltf &&
        Object.keys(nodes).map((key) => (
          <Select key={key} name={key} enabled={select?.[key]?.value}>
            <mesh
              geometry={nodes[key].geometry}
              material={
                new MeshStandardMaterial({
                  color: "#000",
                })
              }
            />
          </Select>
        ))}
    </group>
  );
};
export default Model;
