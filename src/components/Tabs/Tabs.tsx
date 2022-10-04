import classNames from 'classnames';
import { useState } from 'react';

import styles from './Tabs.module.scss';

import { DepartmentType } from '../../types/default';
import { departmentText } from '../../types/text';

const tabs = Object.keys(departmentText) as DepartmentType[];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<DepartmentType>('all');

  const tabElements = tabs.map((tab, idx) => {
    const optionalClass = {
      [styles.active]: tab === activeTab,
    };
    const classes = classNames(styles.tabs__item, optionalClass);

    const onClick = () => setActiveTab(tab);

    return (
      <div className={classes} key={idx} onClick={onClick}>
        {departmentText[tab]}
      </div>
    );
  });

  return <div className={styles.tabs}>{tabElements}</div>;
};

export default Tabs;
