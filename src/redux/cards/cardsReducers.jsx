import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../authorization/authReducer';

export const allColumns = createAsyncThunk(
  'getcolumns',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await authInstance.get(`columns/${boardId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'addColumn',
  async ({ title, boardId }, thunkAPI) => {
    try {
      const { data } = await authInstance.post(`/columns/`, { title, boardId });
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
      const { data } = await authInstance.delete(`columns/${columnId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editColumn = createAsyncThunk(
  'editColumn',
  async ({ columnId, title }, thunkAPI) => {
    try {
      const { data } = await authInstance.put(`columns/${columnId}`, {
        title,
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
// export const getDashboardById = createAsyncThunk(
//   'dashboards/getById',
//   async (_id, thunkAPI) => {
//     try {
//       const { data } = await authInstance.get(`boards/${_id}`);

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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
    console.log(_id);
    try {
      const { data } = await authInstance.put(`boards/${_id}`, updatedData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const allCards = createAsyncThunk(
  'getcards',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await authInstance.get(`cards/${boardId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCard = createAsyncThunk(
  'addCard',
  async (
    { boardId, title, description, priority, deadline, index, columnId },
    thunkAPI
  ) => {
    try {
      const { data } = await authInstance.post(`/cards/`, {
        boardId,
        title,
        description,
        priority,
        deadline,
        index,
        columnId,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteCard = createAsyncThunk(
  'deleteCard',
  async (cardId, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(`cards/${cardId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editCard = createAsyncThunk(
  'editCard',
  async ({ cardsId, title }, thunkAPI) => {
    try {
      const { data } = await authInstance.put(`cards/${cardsId}`, {
        title,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const moveCard = createAsyncThunk(
  'cards/moveCard',
  async ({ cardId, columnId, index }, thunkAPI) => {
    try {
      console.log('Sending request to move card', { cardId, columnId, index });
      const response = await authInstance.patch(`cards/${cardId}`, {
        columnId,
        index,
      });
      const data = response.data;
      console.log('Response data:', data);
      return data;
    } catch (error) {
      console.error('Error moving card:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
