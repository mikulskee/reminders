import React from "react";
import { Field, useFormikContext } from "formik";
import ErrorText from "../ErrorText";

const Select = (fieldProps) => {
  const { options, name } = fieldProps;
  const { errors } = useFormikContext();
  const error = errors[name];

  return (
    <div>
      <Field type="select" as="select" {...fieldProps}>
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </Field>
      <ErrorText>{error}</ErrorText>
    </div>
  );
};

export default Select;
