import { AsyncThunkAction } from '@reduxjs/toolkit';
import classNames from 'classnames';

import { useState } from 'react';

import styles from './Tabs.module.scss';

import { fetchUsersByDep } from '../../features/Home/asyncActions';
import { selectActiveTab } from '../../features/Home/selectors';

import { setActiveTab } from '../../features/Home/slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useNetwork from '../../hooks/useNetwork';
import { DepartmentType, User } from '../../types/default';
import { AbortPromise } from '../../types/other';
import { departmentText } from '../../types/text';

const tabs = Object.keys(departmentText) as DepartmentType[];

interface Props {
  className?: string;
}

const Tabs = ({ className }: Props) => {
  const [fetchPromise, setFetchPromise] = useState<AbortPromise>();
  const activeTab = useAppSelector(selectActiveTab);
  const onLine = useNetwork();
  const dispatch = useAppDispatch();

  const classes = classNames(styles.tabs, className);

  const tabElements = tabs.map((tab, idx) => {
    const optionalClass = {
      [styles.active]: tab === activeTab,
    };

    const itemClasses = classNames(styles.tabs__item, optionalClass);

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
      <button
        className={itemClasses}
        key={idx}
        onClick={onClick}
        disabled={!onLine}
      >
        {departmentText[tab]}
      </button>
    );
  });

  return <div className={classes}>{tabElements}</div>;
};

export default Tabs;
