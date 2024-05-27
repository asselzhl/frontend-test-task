import React, { useState } from "react";
import { FormFieldWithLabel } from "../FormField/FormFieldWithLabel";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store/store";
import { addNewEntityLabel } from "../../store/newEntity/newEntitySlice";
import { LabelsItem } from "../LabelsItem/LabelsItem";
import { getNewEntityLabels } from "../../store/selectors";

const style = {
  form: `flex items-end gap-x-2 mb-7`,
  button: `bg-[#999] text-white rounded py-[13px] px-6 hover:opacity-80 duration-300`,
};

export const NewEntityLabels = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [label, setLabel] = useState("");

  const entityLabels = useSelector(getNewEntityLabels);

  const handleChange = (e) => {
    setLabel(e.target.value);
  };

  const handleButtonClick = () => {
    dispatch(addNewEntityLabel(label));
    setLabel("");
  };

  return (
    <div>
      <div className={style.form}>
        <FormFieldWithLabel
          name="labels"
          value={label}
          onChange={handleChange}
        />
        <button
          className={style.button}
          type="button"
          onClick={handleButtonClick}
        >
          +
        </button>
      </div>

      <ul>
        {entityLabels.map((label) => {
          return <LabelsItem label={label} />;
        })}
      </ul>
    </div>
  );
};