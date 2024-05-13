import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../authorization/authReducer';

export const addColumn = createAsyncThunk(
  'addColumn',
  async ({ _id, text, owner }, thunkAPI) => {
    try {
      const { data } = await authInstance.post(`/${_id}`, {
        text,
        owner,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteColumn = createAsyncThunk(
  'deleteColumn',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(`api/column/${columnId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editColumn = createAsyncThunk(
  'editColumn',
  async ({ columnId, text }, thunkAPI) => {
    try {
      const { data } = await authInstance.put(`api/column/${columnId}`, {
        text,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getAllDashboards = createAsyncThunk(
  'dashboards/fetchAllDashboards',
  async (_, thunkAPI) => {
    try {
      const { data } = await authInstance.get('boards/');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getDashboardById = createAsyncThunk(
  'dashboards/getById',
  async (_id, thunkAPI) => {
    try {
      const { data } = await authInstance.get(`boards/${_id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDashboard = createAsyncThunk(
  'dashboards/deleteDashboard',
  async (_id, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(`boards/${_id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createBoard = createAsyncThunk(
  'addBoard',
  async (formData, thunkAPI) => {
    console.log('formData:', formData);
    try {
      const { data } = await authInstance.post('boards/', formData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editBoard = createAsyncThunk(
  'editBoard',
  async ({ _id, updatedData }, thunkAPI) => {
    try {
      const { data } = await authInstance.put(`board/${_id}`, updatedData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
