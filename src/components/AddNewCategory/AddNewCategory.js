import React, { useState } from "react";
import PlusIcon from "../../assets/icons/plus.svg";
import Button from "../UI/Button";
import AdditionalForm from "./AdditionalForm";
import { Field } from "formik";

const AddNewCategory = () => {
  const [isAdditionalButtonOpen, setIsAdditionalButtonOpen] = useState(false);
  const handleOpenInput = () => {
    setIsAdditionalButtonOpen(true);
  };
  return (
    <div>
      {isAdditionalButtonOpen && <Field component={AdditionalForm} />}
      {!isAdditionalButtonOpen && (
        <Button
          variant="secondary"
          beforeIcon={PlusIcon}
          type="button"
          onClick={handleOpenInput}
        >
          Add New Category
        </Button>
      )}
    </div>
  );
};

export default AddNewCategory;
