import React from "react";
import { formFieldsMap } from "./formFieldsMap";

const style = {
  pageInput: `py-3 px-4 leading-6 rounded border border-[#CFCFCF] focus:outline-[#007298] w-full`,
};

interface FormFieldWithLabelProps {
  name: string;
  value: string;
  onChange;
}

export const FormFieldWithLabel = ({
  name,
  value,
  onChange,
}: FormFieldWithLabelProps) => {
  const config = formFieldsMap[name];
  return (
    <div>
      <label htmlFor={config.inputID}>
        {config.labelText}
        <input
          className={style.pageInput}
          type={config.type}
          id={config.inputID}
          placeholder={config.placeholderText}
          name={config.name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
