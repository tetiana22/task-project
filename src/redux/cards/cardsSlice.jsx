import { createSlice, isAnyOf } from '@reduxjs/toolkit';
const {
  addColumn,
  editColumn,
  createBoard,
  editBoard,
  getAllDashboards,
  deleteDashboard,
  getDashboardById,
} = require('./cardsReducers');

const initialState = {
  boards: [],

  currentBoardId: null,
  // cards: [],
  // cardId: null,
  // columns: [],
  // columnId: null,
  isLoading: false,
  error: null,
  columnsLength: 0,
  currentBg: '',
  currentName: '',
  selectedPriority: 'show all',
};

const boardsSlice = createSlice({
  name: 'dashboards',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(getAllDashboards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards = action.payload;
        state.error = null;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.currentBoardId = action.payload._id;
        state.boards = [...state.boards, action.payload];
        // state.boards.push(action.payload);
      })
      .addCase(deleteDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.dashboards.findIndex(
          item => item._id === action.payload.deletedBoard._id
        );

        state.dashboards.splice(index, 1);
      })
      // .addCase(getDashboardById.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.currentBoardId = action.payload;
      //   state.error = null;

      //   state.currentBg = action.payload?.board?.backgroundURL;
      //   state.currentName = action.payload?.board?.name;
      //   state.columnsLength = action.payload?.columns?.length;
      //   state.selectedPriority = 'show all';
      // })
      .addCase(editBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { _id, name, icon, backgroundURL } = action.payload;

        const boardIndex = state.boards.findIndex(item => item._id === _id);

        state.boards[boardIndex] = {
          ...state.boards[boardIndex],
          name,
          icon,
          backgroundURL,
        };
        state.currentName = name;
        state.currentBg = backgroundURL;
      })

      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.currentBoardId.columns.push(action.payload);
      })
      .addCase(editColumn.fulfilled, (state, action) => {
        const { _id, text } = action.payload;
        const columnIndex = state.columns.findIndex(item => item._id === _id);
        state.columns[columnIndex].text = text;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          addColumn.pending,
          editColumn.pending,
          createBoard.pending,
          editBoard.pending,
          getAllDashboards.pending,
          deleteDashboard.pending,
          getDashboardById.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addColumn.rejected,
          editColumn.rejected,
          createBoard.rejected,
          editBoard.rejected,
          getAllDashboards.rejected,
          deleteDashboard.rejected,
          getDashboardById.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});
export const boardsReducer = boardsSlice.reducer;
