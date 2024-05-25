import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const agent = axios.create({
    baseURL: 'http://localhost:3001',
});

export const fetchEntities = createAsyncThunk('fetchEntities', async (_, thunkApi) => {
    try {
        const data = await agent.get('/entities');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});