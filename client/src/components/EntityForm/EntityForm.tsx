import React from "react";
import { FormFieldWithLabel } from "../FormField/FormFieldWithLabel";
import { Button } from "../Button/Button";
import { NewEntityLabels } from "../NewEntityLabels/NewEntityLabels";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  clearNewEntityData,
  setNewEntityData,
} from "../../store/newEntity/newEntitySlice";
import { getNewEntityState } from "../../store/selectors";
import { createEntity } from "../../store/entity/entityThunk";

const style = {
  wrapper: `w-full`,
  title: `text-center mb-7 text-2xl font-bold`,
  from: `flex gap-6 items-end justify-center flex-wrap`,
};

export const EntityForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const fields = ["name", "coordinate1", "coordinate2"];

  const newEntityState = useSelector(getNewEntityState);

  const handleFormInputsChange = (e) => {
    dispatch(setNewEntityData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntityData = {
      name: newEntityState.name,
      coordinate: [newEntityState.coordinate1, newEntityState.coordinate2],
      labels: newEntityState.labels,
    };

    dispatch(createEntity(newEntityData));
    dispatch(clearNewEntityData());
  };
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Create Entity</h1>
      <form className={style.from} onSubmit={handleSubmit}>
        {fields.map((field) => {
          return (
            <FormFieldWithLabel
              key={field}
              name={field}
              value={newEntityState[field]}
              onChange={handleFormInputsChange}
            />
          );
        })}

        <NewEntityLabels />
        <Button text="create entity" type="submit" onClick={() => {}} />
      </form>
    </div>
  );
};
