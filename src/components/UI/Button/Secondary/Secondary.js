import React from "react";
import { Wrapper } from "./Secondary.Styled";

const Secondary = ({ children, beforeIcon, ...props }) => {
  return (
    <Wrapper {...props}>
      {beforeIcon && <img src={beforeIcon} alt="" />}
      {children}
    </Wrapper>
  );
};

export default Secondary;
