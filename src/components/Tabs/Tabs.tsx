import classNames from 'classnames';

import styles from './Tabs.module.scss';

import { selectActiveTab } from '../../features/Home/selectors';

import { setActiveTab } from '../../features/Home/slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useNetwork from '../../hooks/useNetwork';
import { DepartmentType } from '../../types/default';
import { departmentText } from '../../types/text';

const tabs = Object.keys(departmentText) as DepartmentType[];

interface Props {
  className?: string;
  updateDep: (dep: DepartmentType) => void;
}

const Tabs = ({ className, updateDep }: Props) => {
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

      updateDep(tab);
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
