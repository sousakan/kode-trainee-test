import classNames from 'classnames';

import styles from './Search.module.scss';

import { ReactComponent as SearchIcon } from '../../assets/icons/search_icon.svg';
import { ReactComponent as SortIcon } from '../../assets/icons/search_sort_icon.svg';
import { selectSearchValue } from '../../features/Home/selectors';
import { setSearchValue } from '../../features/Home/slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

interface Props {
  className?: string;
}

const Search = ({ className }: Props) => {
  const dispatch = useAppDispatch();
  const classes = classNames(styles.search, className);
  const searchValue = useAppSelector(selectSearchValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchValue(e.target.value));

  return (
    <div className={classes}>
      <input
        className={styles.search__input}
        type="search"
        placeholder="Введи имя, тег, почту..."
        value={searchValue}
        onChange={onChange}
      />
      <SearchIcon className={styles['search__search-icon']} />
      <SortIcon className={styles['search__sort-icon']} />
    </div>
  );
};

export default Search;
