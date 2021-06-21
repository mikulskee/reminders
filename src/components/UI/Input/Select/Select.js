import React from "react";
import { Field, useFormikContext } from "formik";
import ErrorText from "../ErrorText";
import InputWrapper from "../InputWrapper";

const Select = (fieldProps) => {
  const { options, name } = fieldProps;
  const { errors } = useFormikContext();
  const error = errors[name];

  return (
    <InputWrapper>
      <Field type="select" as="select" {...fieldProps}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Field>
      <ErrorText>{error}</ErrorText>
    </InputWrapper>
  );
};

export default Select;
