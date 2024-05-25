import { RootState } from "./store";

export const getEntityState = (state: RootState) => state.entity;

export const getEntityList = (state: RootState) => state.entity.data;

export const getEntityStateStatus = (state: RootState) => state.entity.status;