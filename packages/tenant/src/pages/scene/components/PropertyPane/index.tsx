import { FC, PropsWithChildren } from "react";
import Container from "../Container";
import type { ContainerProps } from "../Container";

const PropertyPane: FC<ContainerProps> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default PropertyPane;
