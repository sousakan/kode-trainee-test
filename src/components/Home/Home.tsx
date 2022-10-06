import styles from './Home.module.scss';

import {
  selectLoadingStatus,
  selectUsers,
} from '../../features/Home/selectors';
import { useAppSelector } from '../../hooks/redux';
import Bar from '../Bar';
import Container from '../Container';
import Error from '../Error';
import Search from '../Search';
import SkeletonBar from '../SkeletonBar';
import Tabs from '../Tabs';

const Home = () => {
  const users = useAppSelector(selectUsers);
  const loadingStatus = useAppSelector(selectLoadingStatus);

  const content =
    loadingStatus !== 'failed' ? (
      <main className={styles.home__users}>
        {users.length
          ? users.map((user) => <Bar key={user.id} {...user} />)
          : new Array(10).fill(0).map((_, idx) => <SkeletonBar key={idx} />)}
      </main>
    ) : (
      <Error />
    );

  return (
    <Container>
      <div className={styles.home}>
        <header className={styles.home__header}>
          <h1 className={styles.home__title}>Поиск</h1>
          <Search className={styles.home__search} />
          <Tabs />
        </header>
        {content}
      </div>
    </Container>
  );
};

export default Home;
