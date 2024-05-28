import { RootState } from "./store";


// Entity selectors
export const getEntityState = (state: RootState) => state.entity;

export const getEntityList = (state: RootState) => state.entity.data;

export const getEntityStateStatus = (state: RootState) => state.entity.status;

// Entity form selectors
export const getCreateEntityFormState = (state: RootState) => state.entityForm.createEntityForm;
export const getCreateEntityFormLabels = (state: RootState) => state.entityForm.createEntityForm.labels;


export const getEditEntityFormState = (state: RootState) => state.entityForm.editEntityForm;
export const getEditEntityFormLabels = (state: RootState) => state.entityForm.editEntityForm.labels;