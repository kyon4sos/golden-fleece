
import { useStore } from '@/store/scene';
import Drag from '@icon-park/react/lib/icons/Drag';
import { Form, Select, Slider } from 'antd';
import ColorPicker from '../ColorPicker';
import DragContainer from '../DragContainer'
import Upload from '../Upload'
import InputNumberOrSlider from '../InputNumberOrSlider';
import { useEffect } from 'react';

const MaterialPane = (props) => {
  const { x, y } = props
  const newMaterial = useStore((state) => state.newMaterial);
  const currentMaterial = useStore((state) => state.currentMaterial);

  useEffect(() => {
    console.log(currentMaterial);

  },[currentMaterial])
  const changeCurrentMaterial = useStore((state) => state.changeCurrentMaterial);
  const onValuesChange = (val) => {
    console.log('onValuesChange',val);
    console.log('newMaterial', newMaterial);
    // currentMaterial = val
    changeCurrentMaterial(val);
  };

  return (
    <div>
      <DragContainer x={x} y={y} header={
        <h3 className='flex justify-between p-2'>
          Material
          <Drag theme="outline" size="20" fill="#333" />
        </h3>} >
        <div className='p-2'>
          <Form onValuesChange={onValuesChange}>
            <Form.Item label="材质" name="type">
              <Select>
                <Select.Option value="meshPhysicalMaterial">Physical</Select.Option>
                <Select.Option value="meshStandardMaterial">Standard</Select.Option>
                <Select.Option value="meshToonMaterial">Toon</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="color" name="color">
              <ColorPicker />
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
        </div>
      </DragContainer >
    </div>
  );
}
export default MaterialPane