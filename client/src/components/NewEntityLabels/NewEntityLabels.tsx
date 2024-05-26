import React from "react";
import { FormFieldWithLabel } from "../FormField/FormFieldWithLabel";
import { Button } from "../Button/Button";

const style = {
  form: `flex items-end gap-x-2`,
  button: `bg-[#999] text-white rounded py-[13px] px-6 hover:opacity-80 duration-300`,
};

export const NewEntityLabels = () => {
  return (
    <div className={style.form}>
      <FormFieldWithLabel name="labels" value="" onChange={() => {}} />
      <button className={style.button}>+</button>
    </div>
  );
};
