import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Loader from "./components/Loader";
import Model from "./components/Modal";
import SideBar from "./components/SideBar";

import "./index.less";

const Scene = () => {
  return (
    <div className="scene">
      <SideBar left="8px"></SideBar>

      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{
          height: "100vh",
        }}
      >
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={<Loader />}>
          <Model modal="/shoe-draco.glb" />
          <Environment preset="city" files={"/potsdamer_platz_1k.hdr"} />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        </Suspense>
        {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]} renderPriority={2}>
                <GizmoViewport axisColors={["hotpink", "aquamarine", "#3498DB"]} labelColor="black" />
            </GizmoHelper> */}
        <OrbitControls makeDefault />
      </Canvas>
      <SideBar right="8px"></SideBar>
    </div>
  );
};

export default Scene;
