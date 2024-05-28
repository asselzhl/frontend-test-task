import { createSlice } from "@reduxjs/toolkit";


type EntityFormKeys = 'createEntityForm' | 'editEntityForm';
interface EntityFormValues {
    name: string;
    coordinate1: string;
    coordinate2: string;
    labels: string[];
}

const initialState: Record<EntityFormKeys, EntityFormValues> = {
    createEntityForm: {
        name: '',
        coordinate1: '',
        coordinate2: '',
        labels: [],
    },
    editEntityForm: {
        name: '',
        coordinate1: '',
        coordinate2: '',
        labels: [],
    },
}

export const entityFormSlice = createSlice({
    name: 'entityForm',
    initialState,
    reducers: {
        setCreateEntityFormData: (state, action) => {
            Object.assign(state.createEntityForm, action.payload);
        },
        setEditEntityFormData: (state, action) => {
            Object.assign(state.editEntityForm, action.payload);
        },
        clearCreateEntityFormData: (state) => {
            state.createEntityForm = initialState.createEntityForm;
            return state;
        },
        clearEditEntityFormData: (state) => {
            state.editEntityForm = initialState.editEntityForm;
            return state;
        },
        addCreateEntityFormLabel: (state, action) => {
            state.createEntityForm.labels.push(action.payload);
            return state;
        },
        addEditEntityFormLabel: (state, action) => {
            state.editEntityForm.labels.push(action.payload);
            return state;
        },
        removeCreateEntityFormLabel: (state, action) => {
            state.createEntityForm.labels = state.createEntityForm.labels.filter((label) => label !== action.payload);
            return state;
        },
        removeEditEntityFormLabel: (state, action) => {
            state.editEntityForm.labels = state.editEntityForm.labels.filter((label) => label !== action.payload);
            return state;
        }
    }
});


export const entityFormReducer = entityFormSlice.reducer

export const { setCreateEntityFormData, setEditEntityFormData, clearCreateEntityFormData, clearEditEntityFormData, addCreateEntityFormLabel, addEditEntityFormLabel, removeCreateEntityFormLabel, removeEditEntityFormLabel } = entityFormSlice.actions



