import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { ArrowLeft, Download, HamburgerButton, PlayOne } from "@icon-park/react";
import { Space, Tabs } from "antd";
import Loader from "./components/Loader";
import Model from "./components/Modal";
import SideBar from "./components/SideBar";
import style from "./index.module.less";
import ToolBar from "./components/ToolBar";
import PropertyPane from "./components/PropertyPane";
const { TabPane } = Tabs;

const Header = () => {};

const Scene = () => {
  const [currentScene, setCurrentScene] = useState("");
  const onChange = () => {};
  return (
    <div className="scene">
      <ToolBar>
        <Space>
          <PlayOne theme="outline" size="24" fill="#333" />
          <Download theme="outline" size="24" fill="#333" />
        </Space>
      </ToolBar>
      <SideBar
        left="8px"
        title="文件名"
        header={
          <div className={style.header}>
            <ArrowLeft theme="outline" size="18" fill="#333" />
            {/* {currentScene} */}
            <HamburgerButton theme="outline" size="18" fill="#333" />
          </div>
        }
      >
        <div></div>
      </SideBar>
      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{
          height: "100vh",
          background: "#000",
        }}
      >
        {/* <ambientLight intensity={0.7} /> */}
        {/* <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
        <Suspense fallback={<Loader />}>
          <Model modal="/shoe-draco.glb" />
          <Environment files={"/potsdamer_platz_1k.hdr"} preset="night" />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        </Suspense>
        {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]} renderPriority={2}>
                <GizmoViewport axisColors={["hotpink", "aquamarine", "#3498DB"]} labelColor="black" />
            </GizmoHelper> */}
        <OrbitControls makeDefault />
      </Canvas>
      <PropertyPane right="8px" width="400px">
        <div className={style.property}>
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </PropertyPane>
    </div>
  );
};

export default Scene;
