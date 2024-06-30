import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const authInstance = axios.create({
  baseURL: 'https://taskpro-backend-8.onrender.com/',
});

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk(
  'users/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post('users/register', formData);
      toast.success('Registration successful!');
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error('Please write a correct email or password!');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'users/logout',
  async (_, thunkApi) => {
    try {
      await authInstance.post('users/logout');
      clearToken();

      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  'users/signin',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post('users/login', formData);
      setToken(data.token);
      console.log(data.user);
      return {
        token: data.token,
        userData: data.user,
      };
      // return data;
    } catch (error) {
      toast.error('Please write a correct email or password!');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'users/currentUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue('You don’t have any token!');
    try {
      setToken(token);
      const { data } = await authInstance.get('users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const changeTheme = createAsyncThunk(
  'users/theme',
  async ({ theme }, thunkAPI) => {
    try {
      const { data } = await authInstance.patch('users/theme', { theme });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const updateUser = createAsyncThunk(
//   'users/profile',
//   async (dataUser, thunkAPI) => {
//     try {
//       console.log('Sending data:', dataUser);

//       const { data } = await authInstance.put('users/update', dataUser);
//       toast.success('Your changes have been successfully accepted');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.data?.message || error.message);
//     }
//   }
// );
export const updateUser = createAsyncThunk(
  'users/profile',
  async (dataUser, thunkAPI) => {
    try {
      console.log('Sending data:', dataUser);
      const { data } = await authInstance.put('users/update', dataUser, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Your changes have been successfully accepted');
      // const { avatarURL, email, name, theme, updatedAt, _id } = data;
      // return { avatarURL, email, name, theme, updatedAt, _id };
      // return data;
      const { updatedUser } = data;
      return updatedUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data?.message || error.message);
    }
  }
);
export const needHelp = createAsyncThunk(
  'users/needHelp',
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post('users/support', formData);
      toast.success('You successfully send a message!!!');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'users/refreshUser',
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const token = state.auth.token;
//     if (!token) return thunkApi.rejectWithValue('You don’t have any token!');
//     try {
//       setToken(token);
//       const { data } = await authInstance.get('/users/current');

//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
