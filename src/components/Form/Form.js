import React, { useContext } from "react";
import { Formik } from "formik";
import { Wrapper, FormWrapper } from "./Form.Styled";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import Input from "../UI/Input";
import { RemindersContext } from "../../contexts/RemindersContext/RemindersContext";
import Button from "../UI/Button";
import AddNewCategory from "../AddNewCategory";

const initialValues = {
  name: "",
  date: "",
  time: "",
  category: "",
  newCategory: "",
  tags: "high",
  description: "",
};

const MainForm = () => {
  const { addReminder, reminders } = useContext(RemindersContext);

  const handleSubmit = (values, resetForm) => {
    values.id = uuidv4();
    addReminder(values);
    resetForm();
  };

  const categories = reminders.map((item) => item.category);
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
      options: categories,
      additonalComponent: <AddNewCategory />,
    },
    {
      name: "tags",
      type: "radio",
      options: ["very high prio", "important", "low prio"],
    },
    {
      name: "description",
      type: "textarea",
    },
  ];

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
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        validationSchema={validationSchema}
        validateOnChange={true}
      >
        <FormWrapper>
          {fields.map((field) => (
            <Input field={field} key={field.name} />
          ))}
          <Button type="submit" variant="primary">
            Save new reminder
          </Button>
        </FormWrapper>
      </Formik>
    </Wrapper>
  );
};

export default MainForm;
