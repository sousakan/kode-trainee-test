import { SortType, User } from '../types/default';

export default function sortBySortType(
  users: User[],
  sortType: SortType,
): User[] {
  const sortedUsers = [...users];

  if (sortType === 'alphabetical')
    return sortedUsers.sort((a, b) => {
      const fullNameA = a.firstName + a.lastName;
      const fullNameB = b.firstName + b.lastName;

      return fullNameA.localeCompare(fullNameB);
    });

  if (sortType === 'birthday') {
    const thisYear = new Date().getFullYear();

    return sortedUsers.sort((a, b) => {
      const timestampA = new Date(a.birthday).setFullYear(thisYear);
      const timestampB = new Date(b.birthday).setFullYear(thisYear);

      return timestampA - timestampB;
    });
  }

  return users;
}
