import axios from './axios';

import { BackendResponse, DepartmentType, User } from '../types/default';

export const getAll = async () => {
  const { data } = await axios.get<BackendResponse>('users?__dynamic=true');

  const users = data.items;

  return users;
};

export const getByDepartment = async (dep: DepartmentType) => {
  const { data } = await axios.get<BackendResponse>(
    `users?__dynamic=true&__example=${dep}`,
  );

  const users = data.items;

  return users;
};
