import React, { useState } from "react";
import { FormFieldWithLabel } from "../FormField/FormFieldWithLabel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store/store";
import { LabelsItem } from "../LabelsItem/LabelsItem";
import {
  getEditEntityFormLabels,
  getCreateEntityFormLabels,
} from "../../store/selectors";
import {
  addCreateEntityFormLabel,
  addEditEntityFormLabel,
} from "../../store/entityForm/entityForm";

const style = {
  form: `flex items-end gap-x-2 `,
  button: `bg-[#999] text-white rounded py-[13px] px-6 hover:opacity-80 duration-300`,
};

export const EntityFormLabels = ({ type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [label, setLabel] = useState("");

  const entityLabels = useSelector(
    type === "create" ? getCreateEntityFormLabels : getEditEntityFormLabels
  );

  const handleChange = (e) => {
    setLabel(e.target.value);
  };

  const handleButtonClick = () => {
    const action =
      type === "create" ? addCreateEntityFormLabel : addEditEntityFormLabel;
    dispatch(action(label));
    setLabel("");
  };

  return (
    <div className="flex flex-col gap-y-4">
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

      {entityLabels.length ? (
        <ul>
          {entityLabels.map((label) => {
            return <LabelsItem key={label} type={type} label={label} />;
          })}
        </ul>
      ) : null}
    </div>
  );
};
