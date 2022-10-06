import classNames from 'classnames';
import { useState } from 'react';

import styles from './Tabs.module.scss';

import { fetchUsers, fetchUsersByDep } from '../../features/Home/asyncActions';
import { selectActiveTab } from '../../features/Home/selectors';

import { setActiveTab } from '../../features/Home/slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { DepartmentType } from '../../types/default';
import { departmentText } from '../../types/text';

const tabs = Object.keys(departmentText) as DepartmentType[];

const Tabs = () => {
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

      if (tab !== 'all') dispatch(fetchUsersByDep(tab));
      else dispatch(fetchUsers());
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
