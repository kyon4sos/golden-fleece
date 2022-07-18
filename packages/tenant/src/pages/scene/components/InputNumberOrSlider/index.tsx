import { InputNumber, Slider } from "antd";

type Props = {
  onChange?: (val) => void;
  type?: "slider" | "number";
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: number;
};
const InputNumberOrSlider = ({ step = 0.1, type = "slider", ...props }: Props) => {
  return (
    <>{type == "slider" ? <Slider {...props} step={step} /> : <InputNumber step={step} size="small" {...props} />}</>
  );
};

export default InputNumberOrSlider;
