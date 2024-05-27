import React from "react";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteEntity } from "../../store/entity/entityThunk";

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
  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = () => {
    console.log(entity.id);
  };

  const handleDelete = () => {
    dispatch(deleteEntity(entity.id));
  };
  return (
    <li className={style.listItem}>
      <div className="flex w-full">
        <span className="flex-1">{entity.name}</span>
        <span className="flex-1">{entity.coordinate.join(", ")}</span>
        <span className="flex-1">{entity.labels.join(", ")}</span>
      </div>
      <div className={style.buttons}>
        <Button text="edit" onClick={handleEdit} />
        <Button text="delete" onClick={handleDelete} />
      </div>
    </li>
  );
};
