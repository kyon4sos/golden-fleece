import { Children, FC, PropsWithChildren } from "react";
import style from "./index.module.less";

const left = () => {
  return {
    left,
  };
};
type IProps = {
  left?: string;
  right?: string;
} & PropsWithChildren;

const SiderBar: FC<IProps> = ({ children, left, right }: IProps) => {
  return (
    <div
      className={style.SideBar}
      style={{
        left: left,
        right: right,
      }}
    >
      {children}
    </div>
  );
};

export default SiderBar;
