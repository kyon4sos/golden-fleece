import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, ContactShadows, Environment, GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei";
import { Selection,  EffectComposer, Outline, SSAO, SMAA } from '@react-three/postprocessing'
import { ArrowLeft, HamburgerButton, PlayOne, ShareOne, UploadOne } from "@icon-park/react";
import { Select, Space, Tabs, Upload } from "antd";
import { RcFile } from "antd/lib/upload/interface";
import {useWindowSize} from 'react-use';
import Loader from "./components/Loader";
import Model from "./components/Modal";
import SideBar from "./components/SideBar";
import style from "./index.module.less";
import ToolBar from "./components/ToolBar";
import PropertyPane from "./components/PropertyPane";

const { TabPane } = Tabs;
const { Option } = Select;


// sunset, dawn, night, warehouse, forest, apartment, studio, city, park, lobby
const envPresets = [{
  name: "city",
  path: "/potsdamer_platz_1k.hdr"
}, {
  name: "sunset",
  path: "/venice_sunset_1k.hdr"
}, {
  name: "studio",
  path: "/studio_small_03_1k.hdr"
  },
 {
  name: "night",
  path: "/dikhololo_night_1k.hdr"
  }
]

const Scene = () => {
  const [modelPath, setModelPath] = useState("");
  const [hovered, hover] = useState(null)
  const [env, setEnv] = useState("/potsdamer_platz_1k.hdr")
  const {width, height} = useWindowSize();
  const onUploadModal = (file: RcFile) => {
    const path = window.URL.createObjectURL(file)
    setModelPath(path)
  }

  const onChangeTab = () => { };

  const onChangeEnv = (value) => {
    console.log(value);

    setEnv(value)
  }

  const onLoadModel = (model) => {
    console.log(model.nodes);
  }

  return (
    <div className="scene">
      <ToolBar>
        <Space>
          <PlayOne theme="outline" size="24" fill="#333" />
          {/* <Download theme="outline" size="24" fill="#333" /> */}
          <Upload beforeUpload={onUploadModal} itemRender={() => <></>}>
            <UploadOne theme="outline" size="24" fill="#333" />
          </Upload>
          <ShareOne theme="outline" size="24" fill="#333" />
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
          <Selection>
            <EffectComposer multisampling={0} autoClear={false}>
              {/* <SSAO radius={0.05} intensity={30} luminanceInfluence={0.5} color="black" /> */}
              <Outline edgeStrength={100} visibleEdgeColor={31743} hiddenEdgeColor={ 21743 } blur/>
              {/* <SMAA /> */}
            </EffectComposer>
            {
                modelPath.length > 0 ? <Model path={modelPath} onLoad={ onLoadModel } /> : <></>
              }
            {/* <Bounds fit clip margin={1.2} damping={0}>
              {
                modelPath.length > 0 ? <Model path={modelPath} onLoad={ onLoadModel } /> : <></>
              }
            </Bounds> */}
          </Selection>

          <Environment files={ env } />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        </Suspense>
        <GizmoHelper alignment="bottom-left" margin={[width/2, 80]} renderPriority={2}>
            <GizmoViewport axisColors={["hotpink", "aquamarine", "#3498DB"]} labelColor="white" />
        </GizmoHelper>
        <OrbitControls makeDefault />
      </Canvas>
      <PropertyPane right="8px" width="212px">
        <div className={style.property}>
          <Tabs defaultActiveKey="1" onChange={onChangeTab}>
            <TabPane tab="环境" key="1">
              环境光：<Select defaultValue="city" style={{ width: 120 }} onChange={onChangeEnv}>
                {
                  envPresets.map((env, idx) => <Option key={idx} value={env.path}>{env.name}</Option>)
                }
              </Select>
            </TabPane>
            <TabPane tab="材质" key="2">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="动画" key="3">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="模型" key="4">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </PropertyPane>
    </div>
  );
};

export default Scene;
