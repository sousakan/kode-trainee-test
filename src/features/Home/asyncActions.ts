import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';
import { DepartmentType } from '../../types/default';

export const fetchUsersByDep = createAsyncThunk(
  'home/fetchUsersByDep',
  (dep: DepartmentType) => {
    if (dep === 'all') return api.users.getAll();

    return api.users.getByDepartment(dep);
  },
);
