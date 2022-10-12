import classNames from 'classnames';

import { useRef } from 'react';

import styles from './Search.module.scss';

import { ReactComponent as SearchIcon } from '../../assets/icons/search_icon.svg';
import { ReactComponent as SortIcon } from '../../assets/icons/search_sort_icon.svg';
import { selectSortType } from '../../features/Home/selectors';
import { setIdModalOpen, setSearchValue } from '../../features/Home/slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useDebounce from '../../hooks/useDebounce';

interface Props {
  className?: string;
}

const Search = ({ className }: Props) => {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(selectSortType);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchIconRef = useRef(null);

  const classes = classNames(styles.search, className);
  const sortIconClasses = classNames(styles['search__sort-icon'], {
    [styles.active]: sortType === 'birthday',
  });

  const updateValue = (value: string) => {
    dispatch(setSearchValue(value));
  };

  const debUpdateValue = useDebounce(updateValue, 300);

  const openModal = () => {
    dispatch(setIdModalOpen(true));
    document.body.style.overflow = 'hidden';
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      debUpdateValue(e.target.value);
    }
  };

  const onClick = () => inputRef.current?.focus();

  return (
    <div className={classes}>
      <div className={styles.search__focus} tabIndex={0}>
        <input
          ref={inputRef}
          className={styles.search__input}
          type="search"
          placeholder="Введи имя или тег..."
          onChange={onChange}
          tabIndex={-1}
        />
        <SearchIcon
          className={styles['search__search-icon']}
          ref={searchIconRef}
          onClick={onClick}
        />
      </div>
      <SortIcon className={sortIconClasses} onClick={openModal} />
    </div>
  );
};

export default Search;
