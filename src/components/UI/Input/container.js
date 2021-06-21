import React from "react";
import Text from "./Text";
import Radio from "./Radio";
import Select from "./Select";
import TextArea from "./TextArea";

const Container = (props) => {
  const { field } = props;
  const { type } = field;
  switch (type) {
    case "text":
      return <Text {...field} />;
    case "select":
      return <Select {...field} />;
    case "radio":
      return <Radio {...field} />;
    case "textarea":
      return <TextArea {...field} />;
    default:
      return null;
  }
};

export default Container;
