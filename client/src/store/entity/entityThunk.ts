import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { EntityFormState, UpdatedEntity } from '../types';


export const agent = axios.create({
    baseURL: 'http://localhost:3001/entities',
});

export const fetchEntities = createAsyncThunk('fetchEntities', async (_, thunkApi) => {
    try {
        const data = await agent.get('');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const createEntity = createAsyncThunk('createEntity', async (newEntity: EntityFormState, thunkApi) => {
    try {
        const data = await agent.post('', newEntity);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const deleteEntity = createAsyncThunk('deleteEntity', async (id: string, thunkApi) => {
    try {
        const data = await agent.delete(id);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const updateEntity = createAsyncThunk('updateEntity', async (updatedEntity: UpdatedEntity, thunkApi) => {
    try {
        const data = await agent.put(updatedEntity.id, updatedEntity.entityFormData);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})