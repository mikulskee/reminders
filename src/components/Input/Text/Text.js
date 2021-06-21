import React from "react";
import { Field, useFormikContext } from "formik";
import ErrorText from "../ErrorText";
import { Wrapper } from "./Text.Styled";

const Input = (fieldProps) => {
  const { name } = fieldProps;
  const { errors } = useFormikContext();
  const error = errors[name];
  return (
    <Wrapper>
      <label htmlFor={name}>{name}</label>
      <Field {...fieldProps} />
      <ErrorText>{error}</ErrorText>
    </Wrapper>
  );
};

export default Input;
