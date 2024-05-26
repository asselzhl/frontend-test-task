import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface NewEntityState {
    name: string;
    coordinate: number[];
    labels: string[];
}

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

export const createEntity = createAsyncThunk('createEntity', async (newEntity: NewEntityState, thunkApi) => {
    try {
        const data = await agent.post('/entities', newEntity);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const deleteEntity = createAsyncThunk('deleteEntity', async (id: number, thunkApi) => {
    try {
        const data = await agent.delete(`/entities/${id}`);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});