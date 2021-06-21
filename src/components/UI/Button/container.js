import React from "react";
import Primary from "./Primary";
import Transparent from "./Transparent";
import Secondary from "./Secondary";

const Container = ({ variant, children, ...props }) => {
  switch (variant) {
    case "primary":
      return <Primary {...props}>{children}</Primary>;
    case "transparent":
      return <Transparent {...props}>{children}</Transparent>;
    case "secondary":
      return <Secondary {...props}>{children}</Secondary>;
    default:
      return null;
  }
};

export default Container;
