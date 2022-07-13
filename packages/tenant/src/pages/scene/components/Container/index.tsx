import { CSSProperties, FC, PropsWithChildren, ReactNode } from "react";

import style from "./index.module.less";

export type ContainerProps = {
  left?: string;
  right?: string;
  width?: string;
  title?: string;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  bodyStyle?: CSSProperties;
} & PropsWithChildren;

const Container: FC<ContainerProps> = ({ children, ...restProps }) => {
  return (
    <div className={style.Container} style={restProps}>
      {children}
    </div>
  );
};

export default Container;
