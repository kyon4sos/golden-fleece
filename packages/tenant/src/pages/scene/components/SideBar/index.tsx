import {  FC, PropsWithChildren, ReactNode } from "react";
import style from "./index.module.less";

const left = () => {
  return {
    left,
  };
};
type IProps = {
  left?: string;
  right?: string;
  width?: string;
  title?: string;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
} & PropsWithChildren;

const SiderBar: FC<IProps> = ({ children, left, right, title, header, footer, width = '200px' }: IProps) => {
  return (
    <div
      className={style.SideBar}
      style={{
        left,
        right,
        width,
      }}
    >
      <div className={style.header}>
        {
          header ??
          <div className={style.title}>
            {title}
          </div>
        }
      </div>
      <div className={style.body}>
        {children}
      </div>
      {
        footer ?? (
          <div className={style.footer}>
          {footer}
          </div>
        )
      }
    </div>
  );
};

export default SiderBar;
