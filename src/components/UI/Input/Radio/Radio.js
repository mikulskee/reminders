import React from "react";
import { Field } from "formik";
import { OptionsWrapper } from "./Radio.Styled";
import InputWrapper from "../InputWrapper";

const Radio = (fieldProps) => {
  const { options, name } = fieldProps;
  return (
    <InputWrapper>
      <fieldset>
        <legend>{name}</legend>
        <OptionsWrapper>
          {options.map((option) => (
            <label key={option}>
              <Field type="radio" value={option} name={name} />
              <p>{option}</p>
            </label>
          ))}
        </OptionsWrapper>
      </fieldset>
    </InputWrapper>
  );
};

export default Radio;
