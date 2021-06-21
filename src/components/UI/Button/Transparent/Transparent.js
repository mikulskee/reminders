import React from "react";
import { Wrapper } from "./Transparent.Styled";
const Transparent = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Transparent;
