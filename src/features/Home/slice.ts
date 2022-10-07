import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUsersByDep } from './asyncActions';

import { DepartmentType, SortType, User } from '../../types/default';

type StatusType = 'pending' | 'success' | 'failed';

interface Initial {
  loadingStatus: StatusType;
  users: User[];
  searchValue: string;
  activeTab: DepartmentType;
  sort: SortType;
}

const initialState: Initial = {
  loadingStatus: 'pending',
  users: [],
  searchValue: '',
  activeTab: 'all',
  sort: 'alphabetical',
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
      state.loadingStatus = 'failed';
    });
  },
});

export default homeSlice.reducer;

export const { setUsers, setActiveTab, setSearchValue } = homeSlice.actions;
