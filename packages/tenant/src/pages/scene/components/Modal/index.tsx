import { useGLTF } from "@react-three/drei";
import { Suspense, useCallback, useEffect, useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { useStore } from "@/store/scene";

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
  const objects = useStore(state => state.objects);
  const addObject = useStore(state => state.addObject);
  const { id, path, onLoad, select, ...restProps } = props;
  const group = useRef<Group>(null);
  let load = useCallback((path: string) => useGLTF(path), [path])
  let object = load(path)
  useEffect(() => {
    console.log(object);
    // if (onLoad) {
    //   onLoad({ id, path, object })
    // }
    addObject({ id, path, object })
  }, [object])
  useFrame(({ clock }) => {
    if (!group.current) {
      return;
    }
    // group.current.position.y > 10 ? group.current.position.y-- : group.current.position.y++;
    // = clock.getElapsedTime() + 2;
    // console.log(clock.getDelta());
    // console.log(clock.getElapsedTime());
    group.current.rotateY(1 / (2 * 60));
  });
  // console.log(gltf)
  // useEffect(() => {
  //   object = load(path)
  //   console.log(object);
  //   if (onLoad) {
  //     onLoad({ id, object, path });
  //   }
  // }, [path]);
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
      <primitive object={object.scene} ref={group} />
    </Suspense>
  );
};
export default Model;
