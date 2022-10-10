import { User } from '../types/default';

type CompareF = (birthday: number, today: number) => boolean;

function filterByYear(users: User[], compareF: CompareF): User[] {
  return users.filter((user) => {
    const thisYear = new Date().getFullYear();
    const today = new Date().getTime();
    const birthday = new Date(user.birthday).setFullYear(thisYear);

    return compareF(birthday, today);
  });
}

export default function separateUsers(users: User[]) {
  const compareForThisYear: CompareF = (birthday, today) => birthday >= today;
  const compareForNextYear: CompareF = (birthday, today) => birthday < today;

  const thisYearUsers = filterByYear(users, compareForThisYear);
  const nextYearUsers = filterByYear(users, compareForNextYear);

  return [thisYearUsers, nextYearUsers];
}
