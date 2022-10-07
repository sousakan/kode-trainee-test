import { AsyncThunkAction } from '@reduxjs/toolkit';
import classNames from 'classnames';

import { useState } from 'react';

import styles from './Tabs.module.scss';

import { fetchUsersByDep } from '../../features/Home/asyncActions';
import { selectActiveTab } from '../../features/Home/selectors';

import { setActiveTab } from '../../features/Home/slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { DepartmentType, User } from '../../types/default';
import { departmentText } from '../../types/text';

const tabs = Object.keys(departmentText) as DepartmentType[];

const Tabs = () => {
  const [fetchPromise, setFetchPromise] = useState<
    ReturnType<AsyncThunkAction<User[], string, {}>> | undefined
  >();
  const activeTab = useAppSelector(selectActiveTab);
  const dispatch = useAppDispatch();

  const tabElements = tabs.map((tab, idx) => {
    const optionalClass = {
      [styles.active]: tab === activeTab,
    };
    const classes = classNames(styles.tabs__item, optionalClass);

    const onClick = () => {
      dispatch(setActiveTab(tab));

      if (activeTab === tab) return;

      if (fetchPromise) fetchPromise.abort();

      const promise =
        tab !== 'all'
          ? dispatch(fetchUsersByDep(tab))
          : dispatch(fetchUsersByDep('all'));

      setFetchPromise(promise);
    };

    return (
      <div className={classes} key={idx} onClick={onClick}>
        {departmentText[tab]}
      </div>
    );
  });

  return <div className={styles.tabs}>{tabElements}</div>;
};

export default Tabs;
