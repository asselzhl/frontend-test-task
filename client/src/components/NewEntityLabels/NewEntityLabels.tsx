import React, { useState } from "react";
import { FormFieldWithLabel } from "../FormField/FormFieldWithLabel";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store/store";
import { setNewEntityLabels } from "../../store/newEntity/newEntitySlice";

const style = {
  form: `flex items-end gap-x-2`,
  button: `bg-[#999] text-white rounded py-[13px] px-6 hover:opacity-80 duration-300`,
};

export const NewEntityLabels = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [label, setLabel] = useState("");

  const handleChange = (e) => {
    setLabel(e.target.value);
  };

  const handleButtonClick = () => {
    dispatch(setNewEntityLabels(label));
    setLabel("");
  };

  return (
    <div className={style.form}>
      <FormFieldWithLabel name="labels" value={label} onChange={handleChange} />
      <button
        className={style.button}
        type="button"
        onClick={handleButtonClick}
      >
        +
      </button>
    </div>
  );
};
