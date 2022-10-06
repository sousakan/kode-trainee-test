import { User } from '../types/default';

export default function sortBySearchValue(users: User[], searchValue: string) {
  const isMatched = (user: User) =>
    user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.userTag.toLowerCase().includes(searchValue.toLowerCase());

  return users.filter(isMatched);
}
