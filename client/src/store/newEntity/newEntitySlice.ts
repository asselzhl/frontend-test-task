import { createSlice } from "@reduxjs/toolkit";

interface NewEntityState {
    name: string;
    coordinate1: number;
    coordinate2: number;
    labels: string[];
}

const initialState: NewEntityState = {
    name: '',
    coordinate1: null,
    coordinate2: null,
    labels: []
}

export const newEntitySlice = createSlice({
    name: 'newEntity',
    initialState,
    reducers: {
        setNewEntityData: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});


export const newEntityReducer = newEntitySlice.reducer

export const { setNewEntityData } = newEntitySlice.actions