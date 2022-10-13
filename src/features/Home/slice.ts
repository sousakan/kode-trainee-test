import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DepartmentType, SortType } from '../../types/default';

interface Initial {
  searchValue: string;
  activeTab: DepartmentType;
  sortType: SortType;
  isModalOpen: boolean;
}

const initialState: Initial = {
  searchValue: '',
  activeTab: 'all',
  sortType: 'alphabetical',
  isModalOpen: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<DepartmentType>) {
      state.activeTab = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },
    setIdModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
  },
});

export default homeSlice.reducer;

export const { setActiveTab, setSearchValue, setSortType, setIdModalOpen } =
  homeSlice.actions;
