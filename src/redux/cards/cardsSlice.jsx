import { createSlice, isAnyOf } from '@reduxjs/toolkit';
const {
  addColumn,
  editColumn,
  createBoard,
  editBoard,
  getAllDashboards,
  deleteDashboard,
  allColumns,
  deleteColumn,
  addCard,
  allCards,
  editCard,
  deleteCard,
  moveCard,
} = require('./cardsReducers');

const initialState = {
  boards: [],
  currentBoardId: null,
  cards: [],
  cardId: null,
  columns: [],
  columnId: null,
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
  reducers: {
    setCurrentBoardId(state, { payload }) {
      state.currentBoardId = payload;
    },
  },
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
        const newBoard = { ...action.payload, columns: [] };
        state.boards = [...state.boards, newBoard];
      })
      .addCase(deleteDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = state.boards.filter(
          board => board._id !== action.payload._id
        );
      })
      .addCase(allColumns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns = action.payload;

        state.selectedPriority = 'show all';
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = state.boards.map(board =>
          board._id === action.payload._id ? action.payload : board
        );
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.columns.push(action.payload);
        state.error = null;
      })
      .addCase(editColumn.fulfilled, (state, action) => {
        state.columns = state.columns.map(column =>
          column._id === action.payload._id ? action.payload : column
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns = state.columns.filter(
          column => column._id !== action.payload._id
        );
      })
      .addCase(moveCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { cardId, columnId, index } = action.payload;

        const card = state.cards.find(card => card._id === cardId);
        if (card) {
          card.columnId = columnId;
          card.index = index;
        }

        const columnCards = state.cards.filter(
          card => card.columnId === columnId
        );
        columnCards.sort((a, b) => a.index - b.index);
        columnCards.forEach((card, i) => {
          card.index = i;
        });
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards.push(action.payload);
        state.error = null;
      })
      .addCase(allCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cards = action.payload;

        state.selectedPriority = 'show all';
      })
      .addMatcher(
        isAnyOf(
          addColumn.pending,
          editColumn.pending,
          createBoard.pending,
          editBoard.pending,
          getAllDashboards.pending,
          deleteDashboard.pending,
          deleteColumn.pending,
          addCard.pending,
          allCards.pending,
          editCard.pending,
          deleteCard.pending,
          moveCard.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          moveCard.rejected,
          addColumn.rejected,
          editColumn.rejected,
          createBoard.rejected,
          editBoard.rejected,
          getAllDashboards.rejected,
          deleteDashboard.rejected,
          deleteColumn.rejected,
          addCard.rejected,
          allCards.rejected,
          editCard.rejected,
          deleteCard.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const boardsReducer = boardsSlice.reducer;
export const { setCurrentBoardId } = boardsSlice.actions;
