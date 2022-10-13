import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { RootState } from '../app/store';

import config from '../config';
import { selectActiveTab } from '../features/Home/selectors';
import { DepartmentType, User } from '../types/default';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: config.apiURL,
});

const dynamicBaseQuery: BaseQueryFn<
  void | DepartmentType,
  unknown,
  FetchBaseQueryError
> = async (dep, api, extraOptions) => {
  const department = dep || selectActiveTab(api.getState() as RootState);

  const adjustedUrl =
    department === 'all' && config.dynamic
      ? 'users?__dynamic=true'
      : `users?__dynamic=true&__example=${department}`;

  const adjustedArgs = adjustedUrl;

  return rawBaseQuery(adjustedArgs, api, extraOptions);
};

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: dynamicBaseQuery,
  refetchOnMountOrArgChange: config.cashingTime,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getUsersByDep: builder.query<User[], void | DepartmentType>({
      query: (dep) => dep,
      transformResponse: (response: { items: User[] }) => response.items,
    }),
  }),
});

export const { useGetUsersByDepQuery } = usersApi;
