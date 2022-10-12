import { useEffect, useRef, useState } from 'react';

import styles from './Header.module.scss';

import { fetchUsersByDep } from '../../features/Home/asyncActions';
import {
  selectActiveTab,
  selectLoadingStatus,
} from '../../features/Home/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useNetwork from '../../hooks/useNetwork';
import { DepartmentType } from '../../types/default';
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

type StatusType = 'offline' | 'connecting' | 'online';

interface Props {
  updateDep: (dep: DepartmentType) => void;
}

const Header = ({ updateDep }: Props) => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const activeTab = useAppSelector(selectActiveTab);
  const prevLoadStatus = useRef<typeof loadingStatus>('pending');
  const onLine = useNetwork();
  const prevOnLine = useRef(onLine);

  const [status, setStatus] = useState<StatusType>('online');

  useEffect(() => {
    if (onLine) return;

    setStatus('offline');
    prevOnLine.current = false;
  }, [onLine]);

  useEffect(() => {
    if (prevOnLine.current !== onLine && onLine) {
      setStatus('connecting');

      updateDep(activeTab);

      prevOnLine.current = true;
      prevLoadStatus.current = 'pending';

      return;
    }

    if (
      prevLoadStatus.current === 'pending' &&
      loadingStatus === 'success' &&
      prevOnLine.current &&
      onLine
    ) {
      setStatus('online');
      prevOnLine.current = true;
      prevLoadStatus.current = 'success';
    }
  }, [dispatch, activeTab, onLine, loadingStatus, updateDep]);

  switch (status) {
    case 'offline':
      return offLineElement;
    case 'connecting':
      return connectElement;
    case 'online':
      return onLineElement;
  }
};

export default Header;
