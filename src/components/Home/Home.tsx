import styles from './Home.module.scss';

import { User } from '../../types/default';
import Bar from '../Bar';
import Container from '../Container';
import Search from '../Search';
import Tabs from '../Tabs';

interface Props {
  users: User[];
}

const Home = ({ users }: Props) => {
  const bars = users.map((user) => <Bar key={user.id} {...user} />);

  return (
    <Container>
      <div className={styles.home}>
        <header className={styles.home__header}>
          <h1 className={styles.home__title}>Поиск</h1>
          <Search className={styles.home__search} />
          <Tabs />
        </header>
        <main className={styles.home__users}>{bars}</main>
      </div>
    </Container>
  );
};

export default Home;
