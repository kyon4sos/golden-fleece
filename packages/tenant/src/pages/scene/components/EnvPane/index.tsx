import { useStore } from "@/store/scene";
import { Form, Select } from "antd";
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
const EnvPane = (onChange) => {
  const increaseAmbientLight = useStore((state) => state.increaseAmbientLight);
  const onChangeEnv = () => {
    onChange({});
  };
  const onchangeIntensity = () => {};
  return (
    <>
      <Form>
        <Form.Item label="环境光">
          <Select defaultValue="city" style={{ width: 120 }} onChange={onChangeEnv} size="small">
            {envPresets.map((env, idx) => (
              <Option key={idx} value={env.path}>
                {env.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="强度">
          <InputNumberOrSlider onChange={increaseAmbientLight} />
        </Form.Item>
        <Form.Item label="角度">
          <InputNumberOrSlider type="number" />
        </Form.Item>
      </Form>
    </>
  );
};

export default EnvPane;
