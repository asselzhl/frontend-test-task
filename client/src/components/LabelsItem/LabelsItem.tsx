import React from "react";
import { useDispatch } from "react-redux";
import { removeNewEntityLabel } from "../../store/newEntity/newEntitySlice";
import { AppDispatch } from "../../store/store";

const style = {
  listItem: `flex items-center justify-between mb-3 gap-x-2`,
  button: `bg-[#999] text-white rounded py-[13px] px-6 hover:opacity-80 duration-300`,
  labelName: `py-3 px-4 leading-6 rounded border border-[#000] w-full`,
};

interface LabelsItemProps {
  label: string;
}

export const LabelsItem = ({ label }: LabelsItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = () => {
    dispatch(removeNewEntityLabel(label));
  };
  return (
    <li className={style.listItem}>
      <p className={style.labelName}>{label}</p>
      <button className={style.button} onClick={handleRemove} type="button">
        -
      </button>
    </li>
  );
};
