import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEntities } from "../../store/entity/entityThunk";
import { getEntityList } from "../../store/selectors";
import { AppDispatch } from "../../store/store";
import { EntityItem } from "../EntityItem/EntityItem";

export const EntityList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const entityList = useSelector(getEntityList);

  useEffect(() => {
    dispatch(fetchEntities());
  }, [dispatch]);

  return (
    <div>
      {entityList.map((entity) => {
        return <EntityItem entity={entity} key={entity.id} />;
      })}
    </div>
  );
};
