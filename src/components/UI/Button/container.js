import React from "react";
import Primary from "./Primary";
import Transparent from "./Transparent";

const Container = ({ variant, children, ...props }) => {
  switch (variant) {
    case "primary":
      return <Primary {...props}>{children}</Primary>;
    case "transparent":
      return <Transparent {...props}>{children}</Transparent>;
    default:
      return null;
  }
};

export default Container;
