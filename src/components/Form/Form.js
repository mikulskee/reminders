import React, { useContext } from "react";
import { Formik } from "formik";
import { Wrapper, FormWrapper } from "./Form.Styled";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import Input from "../UI/Input";
import { RemindersContext } from "../../contexts/RemindersContext/RemindersContext";

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
    options: ["", "Category"],
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
  const { addReminder } = useContext(RemindersContext);

  const handleSubmit = (values) => {
    values.id = uuidv4();
    addReminder(values);
  };

  const validationSchema = yup.object({
    name: yup.string().required(),
    date: yup.string().required(),
    time: yup.string().required(),
    category: yup.string().required(),
    tags: yup.string().required(),
    description: yup.string().required(),
  });

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={true}
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
