import { useEffect, useRef } from 'react';

import styles from './Header.module.scss';

import { selectActiveTab } from '../../features/Home/selectors';
import { useAppSelector } from '../../hooks/redux';
import useNetwork from '../../hooks/useNetwork';
import { useGetUsersByDepQuery } from '../../services/users';
import Container from '../Container';
import Search from '../Search';

const onLineElement = (
  <header className={styles.header}>
    <Container>
      <h1 className={styles.header__title}>Поиск</h1>
      <Search className={styles.search} />
    </Container>
  </header>
);

const offLineElement = (
  <header className={`${styles.header} ${styles.offline}`}>
    <Container>
      <h1 className={styles.header__title}>Поиск</h1>
      <p className={styles['header__offline-text']}>
        Не могу обновить данные. Проверь соединение с интернетом.
      </p>
    </Container>
  </header>
);

const connectElement = (
  <header className={`${styles.header} ${styles.connecting}`}>
    <Container>
      <h1 className={styles.header__title}>Поиск</h1>
      <p className={styles['header__connecting-text']}>
        Секундочку, гружусь...
      </p>
    </Container>
  </header>
);

const Header = () => {
  const activeTab = useAppSelector(selectActiveTab);
  const { isFetching, isLoading } = useGetUsersByDepQuery(activeTab);
  const onLine = useNetwork();
  const prevOnLine = useRef(onLine);
  const element = useRef<JSX.Element>();

  element.current = onLine ? onLineElement : offLineElement;

  if (isFetching && !isLoading && prevOnLine.current !== onLine)
    element.current = connectElement;

  useEffect(() => {
    prevOnLine.current = onLine;
  }, [onLine, prevOnLine]);

  return element.current;
};

export default Header;
