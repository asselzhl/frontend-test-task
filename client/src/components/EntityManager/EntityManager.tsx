import React from "react";
import { EntityForm } from "../EntityForm/EntityForm";
import { EntityList } from "../EntityList/EntityList";

const style = {
  wrapper: `flex flex-col p-20 justify-center items-center gap-y-20`,
};

export const EntityManager = () => {
  return (
    <div className={style.wrapper}>
      <EntityForm type="create" />
      <EntityList />
    </div>
  );
};
