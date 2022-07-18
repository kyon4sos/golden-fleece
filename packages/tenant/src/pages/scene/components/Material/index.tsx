import { CSSProperties } from "react";
import classNames from "classnames/bind";
import Pane from "../Pane";
import style from "./index.module.less";
import { Button, Form, Select, Slider } from "antd";
import ColorPicker from "../ColorPicker";
import { useStore } from "@/store/scene";
import InputNumberOrSlider from "../InputNumberOrSlider";
import Upload from "../Upload";

const { Option } = Select;

let cx = classNames.bind(style);

type MaterialItemProps = {
  material?: material;
  style?: CSSProperties;
};

type material = {
  id: string | number;
  name: string;
  url: string;
};

const mock = (startIndex, stopIndex) => {
  let list = new Array(stopIndex).fill({}).map((mat, idx) => ({
    name: idx.toString(),
    url: "https://shoe-1303249748.cos.ap-shanghai.myqcloud.com/shoe/works/0.59613756369011581655879927.555.png",
    id: startIndex + idx,
  }));
  console.log(list);
  return list;
};

const MaterialItem = (props: MaterialItemProps) => {
  const { material, style } = props;
  return (
    <li className={cx({ MaterialItem: true, rounded: true, "hover:border-gray-100": true })} style={style}>
      <img src={material?.url} alt="material" />
      <span>{material?.name}</span>
    </li>
  );
};

const MaterialList = () => {
  const changeColor = useStore((state) => state.changeColor);
  const newMaterial = useStore((state) => state.newMaterial);
  const changeMaterial = useStore((state) => state.changeMaterial);
  // const value = Form.useWatch({}, form);
  // const [materials, setMaterials] = useState<material[]>([]);
  // useEffect(() => {
  //   setMaterials(mock(0, 10));
  // }, []);
  const onCreate = () => {};
  const onValuesChange = (val) => {
    console.log(val);
    console.log(newMaterial);
    changeMaterial(val);
  };
  return (
    <Pane>
      {/* <div className={cx({ ScrollWrap: true })}>
        <ul className={cx({ MaterialList: true })}>
          {materials.map((material) => (
            <MaterialItem material={material} key={material.id} />
          ))}
        </ul>
      </div> */}
      <Button onClick={onCreate} type="primary">
        创建材质
      </Button>
      <Form onValuesChange={onValuesChange}>
        <Form.Item label="材质" name="type">
          <Select>
            <Option value="meshPhysicalMaterial">Physical</Option>
            <Option value="meshStandardMaterial">Standard</Option>
            <Option value="meshToonMaterial">Toon</Option>
          </Select>
        </Form.Item>
        <Form.Item label="color" name="color">
          <ColorPicker onChange={changeColor} />
        </Form.Item>
        <Form.Item label="metalness" name="metalness">
          <InputNumberOrSlider />
        </Form.Item>
        <Form.Item label="roughness" name="roughness">
          <InputNumberOrSlider />
        </Form.Item>
        <Form.Item label="reflectivity" name="reflectivity">
          <Slider max={10} min={0} step={0.1} />
        </Form.Item>
        <Form.Item label="map" name="map">
          <Upload />
        </Form.Item>
      </Form>
    </Pane>
  );
};
export default MaterialList;
