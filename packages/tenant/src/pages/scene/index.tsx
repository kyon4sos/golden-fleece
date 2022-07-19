import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bounds,
  ContactShadows,
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Stage,
  Stats,
} from "@react-three/drei";
import { Selection, EffectComposer, Outline, SSAO, SMAA, Scanline, Bloom } from "@react-three/postprocessing";
import { AddFour, ArrowLeft, HamburgerButton, PlayOne, ShareOne, UploadOne, Anchor, Down } from "@icon-park/react";
import { Select, Space, Tabs, Tree, Upload } from "antd";
import type { DataNode } from "antd/es/tree";
import { RcFile } from "antd/lib/upload/interface";
import { useWindowSize } from "react-use";
import Loader from "./components/Loader";
import Model from "./components/Modal";
import SideBar from "./components/SideBar";
import style from "./index.module.less";
import ToolBar from "./components/ToolBar";
import PropertyPane from "./components/PropertyPane";
import MaterialList from "./components/Material";
import Text from "./components/Text";
import Sparks from "./components/Sparks";
import Particles from "./components/Particles";
import Effects from "./components/Effects";
import { Group, Mesh } from "three";
import EnvPane from "./components/EnvPane";
import { useStore } from "@/store/scene";
import Box from "./Box";

const { TabPane } = Tabs;
const { Option } = Select;

// sunset, dawn, night, warehouse, forest, apartment, studio, city, park, lobby

type TreeData = {
  name: string;
  children: TreeData[];
  uuid: string;
};

const Scene = () => {
  const [modelPath, setModelPath] = useState("https://abc-apitest.oss-cn-shanghai.aliyuncs.com/fennec_fox/scene.gltf");
  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const [env, setEnv] = useState("/studio_small_03_1k.hdr");
  const { width, height } = useWindowSize();
  const ambientLight = useStore((state) => state.ambientLight);
  const [selectConfig, setSelectConfig] = useState({
    shoe: { value: false },
    shoe_1: { value: false },
    shoe_2: { value: false },
    shoe_3: { value: false },
    shoe_4: { value: false },
    shoe_5: { value: false },
    shoe_6: { value: false },
    shoe_7: { value: false },
  });
  //  const config = useControls({
  //   all: { value: false },
  //   parts: folder(
  // {
  //   shoe: { value: false },
  //   shoe_1: { value: false },
  //   shoe_2: { value: false },
  //   shoe_3: { value: true },
  //   shoe_4: { value: false },
  //   shoe_5: { value: false },
  //   shoe_6: { value: false },
  //   shoe_7: { value: false },
  // },
  //     { collapsed: true },
  //   ),
  // })

  const onUploadModal = (file: RcFile) => {
    const path = window.URL.createObjectURL(file);
    setModelPath(path);
  };
  const onChangeTab = () => {};

  const onChangeEnv = (value) => {
    console.log(value);
    setEnv(value);
  };

  const onLoadModel = (model) => {
    console.log(model.nodes);
    const nodes = model.nodes;
    const { name, children, uuid } = nodes["Scene"];
    setTreeData([
      {
        name,
        children,
        uuid,
      },
    ]);
  };
  const onSelectTree = (selectedKeys, e) => {
    console.log(e);
    const { node, selectedNodes } = e;
    const name = node.name;
    console.log(name);
    Object.keys(selectConfig).forEach((key) => {
      selectConfig[key] = false;
    });
    selectedNodes.forEach((node) => {
      const name = node.name;
      setSelectConfig((pre) => ({
        ...pre,
        [name]: {
          value: true,
        },
      }));
    });
  };
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
      {/* <Leva // you can pass a custom theme (see the styling section)
         // default = false,  true makes the pane fill the parent dom node it's rendered in
        flat // default = false,  true removes border radius and shadow
        oneLineLabels // default = false, alternative layout for labels, with labels and fields on separate rows
         // default = false, hides the GUI header
        collapsed // default = false, when true the GUI is collpased
         // default = false, when true the GUI is hidden
      /> */}
      <SideBar
        left="8px"
        title="文件名"
        header={
          <div className={style.header}>
            <ArrowLeft theme="outline" size="18" fill="#333" />
            <HamburgerButton theme="outline" size="18" fill="#333" />
          </div>
        }
      >
        <div className={style.treeWrap}>
          <Tree
            showLine
            blockNode
            multiple
            switcherIcon={<Down theme="outline" size="18" fill="#333" />}
            defaultExpandedKeys={["0-0-0"]}
            onSelect={onSelectTree}
            treeData={treeData}
            fieldNames={{ title: "name", key: "uuid" }}
          />
        </div>
      </SideBar>
      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{
          height: "100vh",
          background: "#000",
        }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.setClearColor(new THREE.Color("#020207"));
        }}
      >
        <Stats showPanel={0} className="stats" />
        <Stats showPanel={2} className="stats" />
        {/* <fog attach="fog" args={['white', 50, 190]} />
        <pointLight distance={100} intensity={4} color="white" />
        <Number mouse={mouse} hover={hover} />
        <Particles count={isMobile ? 5000 : 10000} mouse={mouse} />
        <Sparks count={20} mouse={mouse} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
        <Effects /> */}
        {/* <ambientLight intensity={0.7} /> */}
        {/* <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
        <Suspense fallback={<Loader />}>
          <EffectComposer multisampling={0} autoClear={false}>
            <SSAO radius={0.05} intensity={30} luminanceInfluence={0.5} color="black" />
            <Outline edgeStrength={100} visibleEdgeColor={31743} hiddenEdgeColor={21743} blur />
            <SMAA />
            {/* <Bloom
              intensity={300} // The bloom intensity. // A blur pass.
              luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
            /> */}
          </EffectComposer>
          <Box />
          <Selection>
            {/* <Stage contactShadow shadows adjustCamera intensity={1} environment="studio" preset="soft">
              {modelPath.length > 0 ? <Model path={modelPath} onLoad={onLoadModel} select={selectConfig} /> : <></>}
            </Stage> */}
            {modelPath.length > 0 ? <Model path={modelPath} onLoad={onLoadModel} /> : <></>}
            {/* <Bounds fit clip margin={1.2} damping={0}>
              {
                modelPath.length > 0 ? <Model path={modelPath} onLoad={ onLoadModel } /> : <></>
              }
            </Bounds> */}
          </Selection>
          <ambientLight intensity={ambientLight.intensity} />
          <Environment files={env} />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        </Suspense>
        <GizmoHelper alignment="bottom-left" margin={[width / 2, 80]} renderPriority={2}>
          <GizmoViewport axisColors={["hotpink", "aquamarine", "#3498DB"]} labelColor="white" />
        </GizmoHelper>
        <OrbitControls makeDefault />
      </Canvas>
      <PropertyPane right="8px" width="212px">
        <div className={style.property}>
          <Tabs defaultActiveKey="1" onChange={onChangeTab} type="card" tabPosition="left">
            <TabPane tab="环境" key="1">
              <EnvPane />
            </TabPane>
            <TabPane tab="材质" key="2">
              <MaterialList />
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
