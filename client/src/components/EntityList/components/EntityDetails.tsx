import React from "react";
import { Button } from "../../../common/Button/Button";

const style = {
  buttons: `flex gap-x-5`,
};

interface EntityItem {
  id: string;
  name: string;
  coordinate: number[];
  labels: string[];
}

interface EntityDetailsProps {
  entity: EntityItem;
  handleEdit: () => void;
  handleDelete: () => void;
}

export const EntityDetails = ({
  entity,
  handleEdit,
  handleDelete,
}: EntityDetailsProps) => {
  return (
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
  );
};
