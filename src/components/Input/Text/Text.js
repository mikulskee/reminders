import React from "react";
import { Field } from "formik";
import { Wrapper } from "./Text.Styled";

const Input = (fieldProps) => {
  const { name } = fieldProps;

  return (
    <Wrapper>
      <label htmlFor={name}>{name}</label>
      <Field {...fieldProps} />
    </Wrapper>
  );
};

export default Input;
