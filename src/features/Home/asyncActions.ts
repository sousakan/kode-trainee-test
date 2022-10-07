import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';
import { AppDispatch, RootState } from '../../app/store';
import { DepartmentType, User } from '../../types/default';

export const fetchUsersByDep = createAsyncThunk<
  User[],
  DepartmentType,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('home/fetchUsersByDep', (dep, thunkAPI) => {
  if (dep === 'all') return api.users.getAll(thunkAPI.signal);

  return api.users.getByDepartment(dep, thunkAPI.signal);
});
