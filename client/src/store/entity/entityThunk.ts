import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface EntityFormState {
    name: string;
    coordinate: string[];
    labels: string[];
}

interface UpdatedEntity {
    id: string;
    entityFormData: EntityFormState;
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

export const createEntity = createAsyncThunk('createEntity', async (newEntity: EntityFormState, thunkApi) => {
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

export const updateEntity = createAsyncThunk('updateEntity', async (updatedEntity: UpdatedEntity, thunkApi) => {
    try {
        const data = await agent.put(`/entities/${updatedEntity.id}`, updatedEntity.entityFormData);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})