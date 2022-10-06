import styles from './Home.module.scss';

import {
  selectActiveTab,
  selectLoadingStatus,
  selectSearchValue,
  selectUsers,
} from '../../features/Home/selectors';
import sortUsers from '../../helpers/sortUsers';
import { useAppSelector } from '../../hooks/redux';
import Bar from '../Bar';
import Container from '../Container';
import Error from '../Error';
import NotFound from '../NotFound';
import Search from '../Search';
import SkeletonBar from '../SkeletonBar';
import Tabs from '../Tabs';

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Container>
      <div className={styles.home}>
        <header className={styles.home__header}>
          <h1 className={styles.home__title}>Поиск</h1>
          <Search className={styles.home__search} />
          <Tabs />
        </header>
        <main className={styles.home__users}>{children}</main>
      </div>
    </Container>
  );
};

const Home = () => {
  const users = useAppSelector(selectUsers);
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const searchValue = useAppSelector(selectSearchValue);

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

  const sortedUsers = sortUsers(users, searchValue);
  const bars = sortedUsers.map((user) => <Bar key={user.id} {...user} />);

  return <Wrapper>{bars}</Wrapper>;
};

export default Home;
