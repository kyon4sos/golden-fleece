import { useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

type onLoad = (gltf: any) => void;
type select = {
  [index: string]: { value: boolean };
};
type ModelProps = {
  id: string;
  path: string;
  onLoad?: onLoad;
  select?: select;
};

const Model = (props: ModelProps) => {
  const { id, path, onLoad, select, ...restProps } = props;
  const group = useRef<Group>(null);
  let object = useGLTF(path) as any;
  console.log(object);

  useFrame(({ clock }) => {
    if (!group.current) {
      return;
    }
    // group.current.position.y > 50 ? group.current.position.y-- : group.current.position.y++;
    // = clock.getElapsedTime() + 2;
    // console.log(clock.getDelta());
    // console.log(clock.getElapsedTime());
    // group.current.rotateY(1 / (2 * 60));
  });
  // console.log(gltf)
  useEffect(() => {
    object = useGLTF(path) as any;
    console.log(object);
    if (onLoad) {
      onLoad({ id, object,path });
    }
  }, [path]);
  // const { nodes } = gltf;
  return (
    // <group ref={group} {...restProps} dispose={null}>
    //   {gltf &&
    //     Object.keys(nodes).map((key) => (
    //       <Select key={key} name={key} enabled={select?.[key]?.value}>
    //         <mesh geometry={nodes[key].geometry}>
    //           <meshStandardMaterial color="red" />
    //         </mesh>
    //       </Select>
    //     ))}
    // </group>
    <Suspense>
      <primitive object={object.scene} />
    </Suspense>
  );
};
export default Model;
