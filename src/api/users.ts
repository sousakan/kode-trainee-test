import axios from './axios';

import config from '../config';
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
  const path =
    dep === 'all' && config.dynamic
      ? 'users?__dynamic=true'
      : `users?__dynamic=true&__example=${dep}`;

  const { data } = await axios.get<BackendResponse>(path, {
    signal: signal,
  });

  const users = data.items;

  return users;
};
