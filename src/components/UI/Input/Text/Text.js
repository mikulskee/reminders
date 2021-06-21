import React from "react";
import { Field, useFormikContext } from "formik";
import ErrorText from "../ErrorText";
import { Wrapper } from "./Text.Styled";
import InputWrapper from "../InputWrapper";

const Input = (fieldProps) => {
  const { name } = fieldProps;
  const { errors } = useFormikContext();
  const error = errors[name];
  return (
    <InputWrapper>
      <Wrapper>
        <label htmlFor={name}>{name}</label>
        <Field {...fieldProps} />
        <ErrorText>{error}</ErrorText>
      </Wrapper>
    </InputWrapper>
  );
};

export default Input;
