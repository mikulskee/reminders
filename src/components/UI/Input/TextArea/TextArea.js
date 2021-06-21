import React from "react";
import { Field, useFormikContext } from "formik";
import ErrorText from "../ErrorText";
import InputWrapper from "../InputWrapper";

const TextArea = (fieldProps) => {
  const { name } = fieldProps;
  const { errors } = useFormikContext();
  const error = errors[name];
  return (
    <InputWrapper>
      <label>{name}</label>
      <Field type="text" {...fieldProps} as="textarea" rows="5" />
      <ErrorText>{error}</ErrorText>
    </InputWrapper>
  );
};

export default TextArea;
