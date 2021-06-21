import React from "react";
import Input from "../../UI/Input";

const AdditionalForm = () => {
  const field = {
    name: "category",
    placeholder: "Category",
    type: "text",
  };
  return (
    <div>
      <Input type="text" field={field} />
    </div>
  );
};

export default AdditionalForm;
