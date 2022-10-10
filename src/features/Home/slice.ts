import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUsersByDep } from './asyncActions';

import { DepartmentType, SortType, User } from '../../types/default';

type StatusType = 'pending' | 'success' | 'failed';

interface Initial {
  loadingStatus: StatusType;
  users: User[];
  searchValue: string;
  activeTab: DepartmentType;
  sortType: SortType;
  isModalOpen: boolean;
}

const initialState: Initial = {
  loadingStatus: 'pending',
  users: [],
  searchValue: '',
  activeTab: 'all',
  sortType: 'alphabetical',
  isModalOpen: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
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
  extraReducers(builder) {
    builder.addCase(fetchUsersByDep.pending, (state, action) => {
      state.loadingStatus = 'pending';
    });

    builder.addCase(fetchUsersByDep.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loadingStatus = 'success';
    });

    builder.addCase(fetchUsersByDep.rejected, (state, action) => {
      state.loadingStatus =
        action.error.message !== 'Aborted' ? 'failed' : 'pending';
    });
  },
});

export default homeSlice.reducer;

export const {
  setUsers,
  setActiveTab,
  setSearchValue,
  setSortType,
  setIdModalOpen,
} = homeSlice.actions;
