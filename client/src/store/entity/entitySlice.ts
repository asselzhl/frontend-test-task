import { createSlice } from "@reduxjs/toolkit";
import { createEntity, deleteEntity, fetchEntities, updateEntity } from "./entityThunk";
import { handlePending, handleRejected } from "../extraReducersUtils";
import { stateStatuses } from "../constants";
import { EntitiesState } from "../types";


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
            .addCase(deleteEntity.rejected, handleRejected)
            .addCase(createEntity.pending, handlePending)
            .addCase(createEntity.fulfilled, (state, action) => {
                state.status = stateStatuses.succeeded;
                state.data.push(action.payload.data);
                return state;
            })
            .addCase(createEntity.rejected, handleRejected)
            .addCase(updateEntity.pending, handlePending)
            .addCase(updateEntity.fulfilled, (state, action) => {
                state.status = stateStatuses.succeeded;
                const updatedEntity = action.payload.data;
                state.data = state.data.map((entity) => entity.id === updatedEntity.id ? updatedEntity : entity);
                return state;
            })
            .addCase(updateEntity.rejected, handleRejected);
    }
});

export const entityReducer = entitySlice.reducer;