import * as THREE from "three";
import React, { useRef } from "react";
import { useStore } from "@/store/scene";

// type Props = {
//   material: MeshStandardMaterialProps;
// };

const materialMap = {
  meshStandardMaterial: <meshStandardMaterial />,
  meshPhysicalMaterial: <meshPhysicalMaterial />,
};
function Box() {
  const { type, ...restProps } = useStore((state) => state.newMaterial);
  const ref = useRef<THREE.Mesh>(null!);

  const render = () => {
    switch (type) {
      case "meshStandardMaterial":
        return <meshStandardMaterial {...restProps} />;
      case "meshPhysicalMaterial":
        return <meshPhysicalMaterial {...restProps} />;
      case "meshToonMaterial":
        return <meshToonMaterial {...restProps} />;
    }
  };
  return (
    <mesh ref={ref}>
      <cylinderGeometry />
      {/* <meshStandardMaterial color={newMaterial?.color} /> */}
      {/* {React.createElement(type, { ...restProps })} */}
      {/* <meshPhysicalMaterial
        color={newMaterial?.color}
        metalness={0.5}
        roughness={0}
        reflectivity={0.2}
        {...newMaterial}
      /> */}
      {/* {materialMap[type]}
       */}
      {render()}
    </mesh>
  );
}

export default Box;

// function Box2(props: JSX.IntrinsicElements["mesh"]) {
//   const { color } = props;
//   const ref = useRef<THREE.Mesh>(null!);
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   //   useFrame((state, delta) => (ref.current.rotation.x += 0.01));
//   return (
//     <mesh {...props} ref={ref}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }
