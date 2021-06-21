import React from "react";
import { StyledMain } from "./Main.Srtyled";

const Main = (props) => {
  const { children } = props;
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
