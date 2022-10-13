import styles from './HomePage.module.scss';

import Container from '../Container';
import Header from '../Header';
import HomeContent from '../HomeContent';
import SortModal from '../SortModal';
import Tabs from '../Tabs';

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.homepage}>
          <Tabs className={styles.homepage__tabs} />
          <HomeContent />
        </div>
      </Container>
      <SortModal />
    </>
  );
};

export default HomePage;
