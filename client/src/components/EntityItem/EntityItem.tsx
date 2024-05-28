import React, { useState } from "react";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteEntity } from "../../store/entity/entityThunk";
import { EntityForm } from "../EntityForm/EntityForm";

const style = {
  listItem: `flex items-center justify-between`,
  buttons: `flex gap-x-5`,
};

interface EntityItem {
  id: number;
  name: string;
  coordinate: number[];
  labels: string[];
}
interface EntityItemProps {
  entity: EntityItem;
}

export const EntityItem = ({ entity }: EntityItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    dispatch(deleteEntity(entity.id));
  };

  const handleCancel = () => {
    setIsEditing(false);
  };
  return (
    <li className={style.listItem}>
      {isEditing ? (
        <>
          <EntityForm type="edit" entity={entity} setIsEditing={setIsEditing} />
          <Button text="cancel" type="button" onClick={handleCancel} />
        </>
      ) : (
        <>
          <div className="flex w-full">
            <span className="flex-1">{entity.name}</span>
            <span className="flex-1">{entity.coordinate.join(", ")}</span>
            <span className="flex-1">{entity.labels.join(", ")}</span>
          </div>
          <div className={style.buttons}>
            <Button text="edit" onClick={handleEdit} />
            <Button text="delete" onClick={handleDelete} />
          </div>
        </>
      )}
    </li>
  );
};
