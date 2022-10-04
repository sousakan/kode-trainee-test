import axios from './axios';

import { DepartmentType, User } from '../types/default';

export const getAll = async () => {
  const { data: users } = await axios.get<User[]>('users?__dynamic=true');

  return users;
};

export const getByDepartment = async (dep: DepartmentType) => {
  const { data: users } = await axios.get<User[]>(
    `users?__dynamic=true&__example=${dep}`,
  );

  return users;
};
