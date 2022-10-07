import axios from './axios';

import { BackendResponse, DepartmentType, User } from '../types/default';

export const getAll = async (signal?: AbortSignal) => {
  const { data } = await axios.get<BackendResponse>('users?__dynamic=true', {
    signal: signal,
  });

  const users = data.items;

  return users;
};

export const getByDepartment = async (
  dep: DepartmentType,
  signal?: AbortSignal,
) => {
  const { data } = await axios.get<BackendResponse>(
    `users?__dynamic=true&__example=${dep}`,
    {
      signal: signal,
    },
  );

  const users = data.items;

  return users;
};
