export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.auth.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectTheme = state => state.auth.theme;

//column//
export const selectBoards = state => state.dashboards.boards;
export const selectBoarsId = state => state.dashboards.currentBoardId;
export const selectColumns = state => state.dashboards.columns;
export const selectColumnsId = state => state.dashboards.columnId;
export const selectCards = state => state.dashboards.cards;
export const selectCardId = state => state.dashboards.cardId;
export const selectCurrentBg = state => state.dashboards.currentBg;
export const selectCurrentName = state => state.dashboards.currentName;
export const selectColumnsLength = state => state.dashboards.columnsLength;
