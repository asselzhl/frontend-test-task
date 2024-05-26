import React from "react";
import { FormFieldWithLabel } from "../FormField/FormFieldWithLabel";
import { Button } from "../Button/Button";

const style = {
  wrapper: `w-full`,
  title: `text-center mb-7 text-2xl font-bold`,
  from: `flex gap-x-5 items-end justify-between`,
};

export const EntityForm = () => {
  const fields = ["name", "coordinates", "labels"];
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Create Entity</h1>
      <form className={style.from}>
        {fields.map((field) => {
          return (
            <FormFieldWithLabel
              key={field}
              name={field}
              value=""
              onChange={() => {}}
            />
          );
        })}
        <Button text="create entity" onClick={() => {}} />
      </form>
    </div>
  );
};
