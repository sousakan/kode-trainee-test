import sortBySearchValue from './sortBySearchValue';

import { User } from '../types/default';

export default function sortUsers(users: User[], searchValue: string) {
  return sortBySearchValue(users, searchValue);
}
