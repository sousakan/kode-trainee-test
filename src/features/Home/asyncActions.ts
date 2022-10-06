import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

export const fetchUsers = createAsyncThunk('home/fetchUsers', () => {
  return api.users.getAll();
});
