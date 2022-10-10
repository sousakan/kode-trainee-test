import filterBySearchValue from './sortBySearchValue';

import sortBySortType from './sortBySortType';

import { SortType, User } from '../types/default';

export default function sortUsers(
  users: User[],
  searchValue: string,
  sortType: SortType,
) {
  const sortedByValue = filterBySearchValue(users, searchValue);
  const sortedByValueAndType = sortBySortType(sortedByValue, sortType);

  return sortedByValueAndType;
}
