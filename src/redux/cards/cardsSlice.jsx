import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
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
} from './cardsReducers';

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
    selectPriority(state, action) {
      state.selectedPriority = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAllDashboards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards = action.payload;
        state.error = null;
        state.currentBg = action.payload.background;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.currentBoardId = action.payload._id;
        state.currentBg = action.payload.background;
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
        state.currentBg = action.payload.background;
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
        const { cardId, columnId, updatedCards } = action.payload;
        state.cards = state.cards.filter(card => card._id !== cardId);
        updatedCards.forEach(updatedCard => {
          const cardIndex = state.cards.findIndex(
            card => card._id === updatedCard._id
          );
          if (cardIndex !== -1) {
            state.cards[cardIndex] = updatedCard;
          } else {
            state.cards.push(updatedCard);
          }
        });

        state.columns = state.columns.map(column => {
          if (column._id === columnId) {
            column.cards = updatedCards;
          }
          return column;
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
      .addCase(editCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cards = state.cards.map(card =>
          card._id === action.payload._id ? action.payload : card
        );
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cards = state.cards.filter(
          card => card._id !== action.payload._id
        );
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
          moveCard.pending,
          editCard.pending,
          deleteCard.pending
        ),
        state => {
          state.isLoading = false;
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
          deleteCard.rejected,
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
export const { selectPriority } = boardsSlice.actions;
