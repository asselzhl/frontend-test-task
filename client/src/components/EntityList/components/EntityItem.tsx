import React, { useState } from "react";
import { Button } from "../../../common/Button/Button";
import { useAppDispatch } from "../../../store/store";
import { deleteEntity } from "../../../store/entity/entityThunk";
import { EntityForm } from "../../EntityForm/EntityForm";
import { EntityDetails } from "./EntityDetails";

const style = {
  listItem: `flex items-center justify-between`,
};

interface EntityItem {
  id: string;
  name: string;
  coordinate: number[];
  labels: string[];
}
interface EntityItemProps {
  entity: EntityItem;
}

export const EntityItem = ({ entity }: EntityItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useAppDispatch();

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
          <EntityDetails
            entity={entity}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </>
      )}
    </li>
  );
};
