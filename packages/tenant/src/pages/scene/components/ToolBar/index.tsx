import { FC, PropsWithChildren } from "react";
import style from "./index.module.less";

const ToolBar: FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.toolBar}>{children}</div>;
};

export default ToolBar;
