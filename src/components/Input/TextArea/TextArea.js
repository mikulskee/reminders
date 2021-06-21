import React from "react";
import { Field } from "formik";

const TextArea = (fieldProps) => {
  return <Field type="text" {...fieldProps} as="textarea" />;
};

export default TextArea;
