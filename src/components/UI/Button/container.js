import React from "react";
import Primary from "./Primary";

const Container = ({ variant, children, ...props }) => {
  switch (variant) {
    case "primary":
      return <Primary {...props}>{children}</Primary>;
    default:
      return null;
  }
};

export default Container;
