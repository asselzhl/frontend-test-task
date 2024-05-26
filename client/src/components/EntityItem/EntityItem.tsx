import React from "react";
import { Button } from "../Button/Button";

const style = {
  listItem: `flex items-center justify-between`,
  buttons: `flex gap-x-5`,
};

export const EntityItem = ({ entity }) => {
  return (
    <li className={style.listItem}>
      <span>{entity.name}</span>
      <span>{entity.coordinate}</span>
      <span>{entity.labels}</span>
      <div className={style.buttons}>
        <Button text="edit" onClick={() => {}} />
        <Button text="delete" onClick={() => {}} />
      </div>
    </li>
  );
};
