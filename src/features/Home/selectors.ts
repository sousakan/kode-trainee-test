import { RootState } from '../../app/store';

export const selectActiveTab = (state: RootState) => state.home.activeTab;
export const selectSearchValue = (state: RootState) => state.home.searchValue;
export const selectSortType = (state: RootState) => state.home.sortType;
export const selectIdModalOpen = (state: RootState) => state.home.isModalOpen;
