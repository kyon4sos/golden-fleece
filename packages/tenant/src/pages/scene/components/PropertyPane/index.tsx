import { FC } from "react";
import type { ContainerProps } from "../Container";
import style from './index.module.less'

const PropertyPane: FC<ContainerProps> = ({ children}) => {
  // return <Container {...restProps}>{children}</Container>;
  return <div className={style.Property}>{children}</div>
};

export default PropertyPane;
