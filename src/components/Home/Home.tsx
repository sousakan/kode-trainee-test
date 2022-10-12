import styles from './Home.module.scss';

import {
  selectLoadingStatus,
  selectSearchValue,
  selectSortType,
  selectUsers,
} from '../../features/Home/selectors';
import separateUsers from '../../helpers/separateUsers';
import sortUsers from '../../helpers/sortUsers';
import { useAppSelector } from '../../hooks/redux';
import Bar from '../Bar';
import Container from '../Container';
import Error from '../Error';
import Header from '../Header';
import NotFound from '../NotFound';
import Separator from '../Separator';
import SkeletonBar from '../SkeletonBar';
import SortModal from '../SortModal';
import Tabs from '../Tabs';

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.home}>
          <Tabs className={styles.home__tabs} />
          <main className={styles.home__users}>{children}</main>
        </div>
      </Container>
      <SortModal />
    </>
  );
};

const Home = () => {
  const users = useAppSelector(selectUsers);
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const searchValue = useAppSelector(selectSearchValue);
  const sortType = useAppSelector(selectSortType);

  let sortedUsers;
  let bars;

  if (loadingStatus === 'pending')
    return (
      <Wrapper>
        {new Array(10).fill(0).map((_, idx) => (
          <SkeletonBar key={idx} />
        ))}
      </Wrapper>
    );

  if (loadingStatus === 'failed')
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    );

  if (!users.length && loadingStatus === 'success')
    return (
      <Wrapper>
        <NotFound />
      </Wrapper>
    );

  sortedUsers = sortUsers(users, searchValue, sortType);

  if (sortType === 'birthday') {
    const [thisYearUsers, nextYearUsers] = separateUsers(sortedUsers);
    const thisYearBars = thisYearUsers.map((user) => (
      <Bar key={user.id} user={user} />
    ));
    const nextYearBars = nextYearUsers.map((user) => (
      <Bar key={user.id} user={user} />
    ));

    return (
      <Wrapper>
        <>
          {thisYearBars}
          {thisYearBars.length !== 0 && nextYearUsers.length !== 0 && (
            <Separator />
          )}
          {nextYearUsers.length !== 0 && nextYearBars}
        </>
      </Wrapper>
    );
  }

  bars = sortedUsers.map((user) => <Bar key={user.id} user={user} />);

  return <Wrapper>{bars}</Wrapper>;
};

export default Home;
