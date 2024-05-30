import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchEntities } from "../../store/entity/entityThunk";
import { getEntityList } from "../../store/selectors";
import { useAppDispatch } from "../../store/store";
import { EntityItem } from "./components/EntityItem";

const style = {
  wrapper: `w-full`,
  title: `text-center mb-7 text-2xl font-bold`,
  list: `flex flex-col gap-y-7`,
};

export const EntityList = () => {
  const dispatch = useAppDispatch();
  const entityList = useSelector(getEntityList);

  useEffect(() => {
    dispatch(fetchEntities());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Entity List</h1>
      <ul className={style.list}>
        {entityList.map((entity) => {
          return <EntityItem entity={entity} key={entity.id} />;
        })}
      </ul>
    </div>
  );
};
