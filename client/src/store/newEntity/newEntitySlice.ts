import { createSlice } from "@reduxjs/toolkit";

interface NewEntityState {
    name: string;
    coordinate1: string;
    coordinate2: string;
    labels: string[];
}

const initialState: NewEntityState = {
    name: '',
    coordinate1: '',
    coordinate2: '',
    labels: []
}

export const newEntitySlice = createSlice({
    name: 'newEntity',
    initialState,
    reducers: {
        setNewEntityData: (state, action) => {
            return { ...state, ...action.payload };
        },
        setNewEntityLabels: (state, action) => {
            state.labels.push(action.payload);
        },
        clearNewEntityData: (state) => {
            state = initialState;
            return state;
        }
    }
});


export const newEntityReducer = newEntitySlice.reducer

export const { setNewEntityData, setNewEntityLabels, clearNewEntityData } = newEntitySlice.actions