import React from "react";
import { Field, useFormikContext } from "formik";
import ErrorText from "../ErrorText";

const TextArea = (fieldProps) => {
  const { name } = fieldProps;
  const { errors } = useFormikContext();
  const error = errors[name];
  return (
    <div>
      <Field type="text" {...fieldProps} as="textarea" />;
      <ErrorText>{error}</ErrorText>
    </div>
  );
};

export default TextArea;
