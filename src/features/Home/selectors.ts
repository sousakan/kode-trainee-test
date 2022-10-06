import { RootState } from '../../app/store';

export const selectLoadingStatus = (state: RootState) =>
  state.home.loadingStatus;
export const selectUsers = (state: RootState) => state.home.users;
export const selectActiveTab = (state: RootState) => state.home.activeTab;
export const selectSearchValue = (state: RootState) => state.home.searchValue;
