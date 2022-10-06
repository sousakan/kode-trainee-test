import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';
import { DepartmentType } from '../../types/default';

export const fetchUsers = createAsyncThunk('home/fetchUsers', () => {
  return api.users.getAll();
});

export const fetchUsersByDep = createAsyncThunk(
  'home/fetchUsersByDep',
  (dep: DepartmentType) => {
    return api.users.getByDepartment(dep);
  },
);
