import React, { useEffect } from "react";
import { FormFieldWithLabel } from "../FormField/FormFieldWithLabel";
import { Button } from "../Button/Button";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";

import {
  getCreateEntityFormState,
  getEditEntityFormState,
} from "../../store/selectors";
import { createEntity, updateEntity } from "../../store/entity/entityThunk";
import {
  setCreateEntityFormData,
  setEditEntityFormData,
  clearCreateEntityFormData,
  clearEditEntityFormData,
} from "../../store/entityForm/entityForm";
import { EntityFormLabels } from "../EntityFormLabels/EntityFormLabels";

const style = {
  wrapper: `w-full`,
  title: `text-center mb-7 text-2xl font-bold`,
  from: `flex gap-6 items-start justify-center flex-wrap`,
};

type EntityFormTypes = "edit" | "create";

interface EntityFormProps {
  type: EntityFormTypes;
  entity;
  setIsEditing?;
}

export const EntityForm = ({
  type = "create",
  entity = null,
  setIsEditing,
}: EntityFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const fields = ["name", "coordinate1", "coordinate2"];

  const entityFormState = useSelector(
    type === "create" ? getCreateEntityFormState : getEditEntityFormState
  );

  useEffect(() => {
    if (entity && type === "edit") {
      const initialFormData = {
        name: entity.name,
        coordinate1: entity.coordinate[0],
        coordinate2: entity.coordinate[1],
        labels: entity.labels,
      };
      dispatch(setEditEntityFormData(initialFormData));
    }
  }, [entity, type, dispatch]);

  const handleFormInputsChange = (e) => {
    const action =
      type === "create" ? setCreateEntityFormData : setEditEntityFormData;
    dispatch(action({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entityFormData = {
      name: entityFormState.name,
      coordinate: [entityFormState.coordinate1, entityFormState.coordinate2],
      labels: entityFormState.labels,
    };

    if (type === "create") {
      dispatch(createEntity(entityFormData));
    } else {
      const updatedEntity = {
        entityFormData: entityFormData,
        id: entity.id,
      };
      dispatch(updateEntity(updatedEntity));
      setIsEditing(false);
    }
  };
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>
        {type === "create" ? "Create Entity" : "Edit Entity"}
      </h1>
      <form className={style.from} onSubmit={handleSubmit}>
        {fields.map((field) => {
          return (
            <FormFieldWithLabel
              key={field}
              name={field}
              value={entityFormState[field]}
              onChange={handleFormInputsChange}
            />
          );
        })}

        <EntityFormLabels type={type} />
        <Button
          text={type === "create" ? "create entity" : "save"}
          type="submit"
          onClick={() => {}}
        />
      </form>
    </div>
  );
};
