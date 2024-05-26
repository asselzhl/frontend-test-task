import React from "react";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteEntity } from "../../store/entity/entityThunk";

const style = {
  listItem: `flex items-center justify-between text-center`,
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

  const handleDeleteButton = () => {
    dispatch(deleteEntity(entity.id));
  };
  return (
    <li className={style.listItem}>
      <span>{entity.name}</span>
      <span>{entity.coordinate.join(", ")}</span>
      <span>{entity.labels.join(", ")}</span>
      <div className={style.buttons}>
        <Button text="edit" onClick={() => {}} />
        <Button text="delete" onClick={handleDeleteButton} />
      </div>
    </li>
  );
};
