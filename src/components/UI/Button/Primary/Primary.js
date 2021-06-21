import React from "react";
import { Wrapper } from "./Primary.Styled";

const Primary = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Primary;
