import React from "react";
import { Field } from "formik";
import { Wrapper, OptionsWrapper } from "./Radio.Styled";

const Radio = (fieldProps) => {
  const { options, name } = fieldProps;
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Radio;
