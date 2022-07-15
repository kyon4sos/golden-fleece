import { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import classNames from 'classnames/bind';
import style from './index.module.less'
import { useClickAway } from "react-use";

let cx = classNames.bind(style);

type ColorpickerProps = {
  label?: string;
  color: string;
  onChange?: (color: string) => void
}

const ColorPicker = (props: ColorpickerProps) => {

  const { label, color, onChange } = props
  const [bgColor, setBgColor] = useState(color);
  const [isOpen, toggle] = useState(false)
  const ref = useRef(null);

  useClickAway(ref, () => {
    toggle(false)
  });

  const onChangeColor = (colorString: string) => {
    onChange && onChange(colorString)
    setBgColor(colorString)
  }

  const onClick = () => {
    toggle(true)
  }

  return (
    <div className={
      cx({
        'color-picker': true
      })
    } ref={ref}>
      {
        isOpen ?
          <div className={cx({
            popover: true
          })}>
            <HexColorPicker color={color} onChange={onChangeColor} />
          </div>
          :
          <div className={cx({
            "color-block-wrap": true
          })}>
            {/* <label>{label ?? '颜色'}:</label> */}
            <div className={cx({
              "color-block": true
            })}
              style={{
                backgroundColor: bgColor
              }}
              onClick={onClick}>
            </div>
          </div>
      }
    </div>);
}

export default ColorPicker