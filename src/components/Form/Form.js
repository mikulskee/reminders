import React from "react";
import { Formik } from "formik";
import { Wrapper, FormWrapper } from "./Form.Styled";
import Input from "../Input/";

const initialValues = {
  name: "",
  date: "",
  time: "",
  category: "",
  tags: "high",
  description: "",
};

const fields = [
  {
    name: "name",
    placeholder: "Reminders name",
    type: "text",
  },
  {
    name: "date",
    placeholder: "XX/XX/XXXX",
    type: "text",
  },
  {
    name: "time",
    placeholder: "00:00",
    type: "text",
  },
  {
    name: "category",
    placeholder: "Category",
    type: "select",
    options: ["category"],
  },
  {
    name: "tags",
    type: "radio",
    options: ["high", "important", "low pro"],
  },
  {
    name: "description",
    type: "textarea",
  },
];

const MainForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <Formik
        validateOnChange={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <FormWrapper>
          {fields.map((field) => (
            <Input field={field} key={field.name} />
          ))}
          <button type="submit">submit</button>
        </FormWrapper>
      </Formik>
    </Wrapper>
  );
};

export default MainForm;
