import { createSlice } from "@reduxjs/toolkit";
import { deleteEntity, fetchEntities } from "./entityThunk";
import { handlePending, handleRejected } from "../reducersUtils";
import { StateStatus, stateStatuses } from "../constants";

interface EntitiesItem {
    id: number;
    name: string;
    coordinate: number[];
    labels: string[];
}

interface EntitiesState {
    status: StateStatus;
    data: EntitiesItem[];
    error: null | string;
}

const initialState: EntitiesState = {
    status: stateStatuses.idle,
    data: [],
    error: null
};

export const entitySlice = createSlice({
    name: 'entity',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEntities.pending, handlePending)
            .addCase(fetchEntities.fulfilled, (state, action) => {
                state.status = stateStatuses.succeeded;
                state.data = action.payload.data;
                return state;
            })
            .addCase(fetchEntities.rejected, handleRejected)
            .addCase(deleteEntity.pending, handlePending)
            .addCase(deleteEntity.fulfilled, (state, action) => {
                state.status = stateStatuses.succeeded;
                state.data = state.data.filter(
                    (entity) => entity.id !== action.payload.data.id
                );
                return state;
            })
            .addCase(deleteEntity.rejected, handleRejected);
    }
});

export const entityReducer = entitySlice.reducer;