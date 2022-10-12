import { AsyncThunkAction } from '@reduxjs/toolkit';

import { User } from './default';

export type AbortPromise =
  | ReturnType<AsyncThunkAction<User[], string, {}>>
  | undefined;
