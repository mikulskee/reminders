import React from "react";
import { Field } from "formik";

const Select = (fieldProps) => {
  console.log(fieldProps);
  const { options } = fieldProps;
  console.log(options);
  return (
    <div>
      <Field type="select" as="select">
        {options.map((option) => (
          <option value={option}> {option}</option>
        ))}
      </Field>
    </div>
  );
};

export default Select;
