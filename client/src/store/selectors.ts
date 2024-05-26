import { RootState } from "./store";


// Entity selectors
export const getEntityState = (state: RootState) => state.entity;

export const getEntityList = (state: RootState) => state.entity.data;

export const getEntityStateStatus = (state: RootState) => state.entity.status;

// New entity selectors
export const getNewEntityState = (state: RootState) => state.newEntity;