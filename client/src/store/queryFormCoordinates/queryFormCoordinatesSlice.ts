import { createSlice } from "@reduxjs/toolkit";
import { QueryFormCoordinatesKeys, QueryFormCoordinatesState } from "../types";
import { queryCoordinates } from "./queryFormCoordinatesThunk";
import { handlePending, handleRejected } from "../extraReducersUtils";

const initialState: QueryFormCoordinatesState = {
    coordinates: { x1: '', y1: '', x2: '', y2: '' },
    entityNames: [],
    entityLabels: []
};

export const queryFormCoordinatesSlice = createSlice({
    name: 'queryFormCoordinates',
    initialState,
    reducers: {
        setCoordinates: (state, action) => {
            Object.assign(state.coordinates, action.payload);
        },
        clearCoordinates: (state) => {
            state.coordinates = initialState.coordinates;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(queryCoordinates.fulfilled, (state, action) => {
                state.entityLabels = action.payload.data.labels;
                state.entityNames = action.payload.data.entities;
                return state;
            })
    },
})

export const queryFormCoordinatesReducer = queryFormCoordinatesSlice.reducer
export const { setCoordinates, clearCoordinates } = queryFormCoordinatesSlice.actions