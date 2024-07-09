import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registration,
  signin,
  currentUser,
  logoutUser,
  updateUser,
  changeTheme,
  needHelp,
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
  isRefreshing: false,
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
        console.log('Update user fulfilled:', action.payload);
        state.userData = action.payload;
      })
      .addCase(needHelp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(changeTheme.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData.theme = action.payload.theme;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.userData;
        console.log(state.userData);
        state.token = action.payload.token;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.userData = action.payload;
        state.isRefreshing = false;
      })

      .addCase(currentUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })

      .addMatcher(
        isAnyOf(
          registration.pending,
          signin.pending,

          logoutUser.pending,
          needHelp.pending
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

          updateUser.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
