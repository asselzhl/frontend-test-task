import { createAsyncThunk } from "@reduxjs/toolkit";
import { agent } from "../entity/entityThunk";

export const queryCoordinates = createAsyncThunk('queryCoordinates', async (coordinates: object, thunkApi) => {
    try {
        const data = await agent.get('/query', { params: coordinates });
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})