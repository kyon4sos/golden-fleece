import { useStore } from "@/store/scene";
import { useFrame } from "@react-three/fiber";
import { Form, Select } from "antd";
import { useState } from "react";
import { Material } from "three";
import InputNumberOrSlider from "../InputNumberOrSlider";
const { Option } = Select;

const envPresets = [
  {
    name: "city",
    path: "/potsdamer_platz_1k.hdr",
  },
  {
    name: "sunset",
    path: "/venice_sunset_1k.hdr",
  },
  {
    name: "studio",
    path: "/studio_small_03_1k.hdr",
  },
  {
    name: "night",
    path: "/dikhololo_night_1k.hdr",
  },
];

type MaterialItemProps = {
  material: Material;
  onClick: (material: Material) => void
}
const MaterialItem = ({ material, onClick }: MaterialItemProps) => {
  return (
    <div onClick={() => onClick(material)}>
      <span>
        {material?.name}
      </span>
      <img src="" alt="" />
      {

      }
    </div>
  );
}
const EnvPane = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 })
  
  const materials = useStore((state) => state.materials);
  const setCurrentMaterial = useStore((state) => state.setCurrentMaterial);
  const onClick = (material) => {
    console.log(material);
    setCurrentMaterial(material)
  }

  const onValuesChange = (val) => {
    console.log(val);
  }
  return (
    <>
      {
        Object.values(materials).map((material: Material) => <MaterialItem key={material.uuid} material={material} onClick={onClick} />
        )
      }
      <Form onValuesChange={onValuesChange}>
        <Form.Item label="环境光">
          <Select defaultValue="city" style={{ width: 120 }} size="small">
            {envPresets.map((env, idx) => (
              <Option key={idx} value={env.path}>
                {env.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="x" name="x">
          <InputNumberOrSlider />
        </Form.Item>
        <Form.Item label="y" name="y">
          <InputNumberOrSlider type="number" />
        </Form.Item>
        <Form.Item label="z" name="z">
          <InputNumberOrSlider type="number" />
        </Form.Item>
      </Form>
    </>
  );
};

export default EnvPane;
