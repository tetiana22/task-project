import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registration,
  signin,
  currentUser,
  logoutUser,
  updateUser,
  changeTheme,
  needHelp,
  refreshUser,
} from './authReducer';

const initialState = {
  token: null,
  userData: {
    name: null,
    email: null,
    theme: null,
    avatarURL: '',
  },
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
        state.token = action.payload.token;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userData.name = action.payload;
        state.userData.email = action.payload;
        state.userData.password = action.payload;
        state.userData.avatarURL = action.payload;
        state.userData = action.payload;
        state.isLoading = false;
      })
      .addCase(needHelp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(changeTheme.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData.theme = action.payload;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
        state.token = action.payload.token;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(
          registration.pending,
          signin.pending,
          currentUser.pending,
          logoutUser.pending,
          needHelp.pending,
          refreshUser.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registration.rejected,
          signin.rejected,
          currentUser.rejected,
          logoutUser.rejected,
          needHelp.rejected,
          refreshUser.rejected,
          updateUser.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
