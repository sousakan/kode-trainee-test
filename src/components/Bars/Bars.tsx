import {
  selectSearchValue,
  selectSortType,
} from '../../features/Home/selectors';
import separateUsers from '../../helpers/separateUsers';
import sortUsers from '../../helpers/sortUsers';
import { useAppSelector } from '../../hooks/redux';
import { User } from '../../types/default';
import Bar from '../Bar';
import Separator from '../Separator';

interface Props {
  users: User[];
}

const Bars = ({ users }: Props) => {
  const searchValue = useAppSelector(selectSearchValue);
  const sortType = useAppSelector(selectSortType);

  const sortedUsers = sortUsers(users, searchValue, sortType);
  let bars;

  if (sortType === 'birthday') {
    const [thisYearUsers, nextYearUsers] = separateUsers(sortedUsers);
    const thisYearBars = thisYearUsers.map((user) => (
      <Bar key={user.id} user={user} />
    ));
    const nextYearBars = nextYearUsers.map((user) => (
      <Bar key={user.id} user={user} />
    ));

    return (
      <>
        {thisYearBars}
        {thisYearBars.length !== 0 && nextYearUsers.length !== 0 && (
          <Separator />
        )}
        {nextYearUsers.length !== 0 && nextYearBars}
      </>
    );
  }

  bars = sortedUsers.map((user) => <Bar key={user.id} user={user} />);

  return <>{bars}</>;
};

export default Bars;
