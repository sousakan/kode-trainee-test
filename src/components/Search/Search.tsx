import classNames from 'classnames';

import styles from './Search.module.scss';

import { ReactComponent as SearchIcon } from '../../assets/icons/search_icon.svg';
import { ReactComponent as SortIcon } from '../../assets/icons/search_sort_icon.svg';

interface Props {
  className?: string;
}

const Search = ({ className }: Props) => {
  const classes = classNames(styles.search, className);

  return (
    <div className={classes}>
      <input
        className={styles.search__input}
        type="search"
        placeholder="Введи имя, тег, почту..."
      />
      <SearchIcon className={styles['search__search-icon']} />
      <SortIcon className={styles['search__sort-icon']} />
    </div>
  );
};

export default Search;
