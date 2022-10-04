import styles from './Search.module.scss';

import { ReactComponent as SearchIcon } from '../assets/icons/search_icon.svg';
import { ReactComponent as SortIcon } from '../assets/icons/search_sort_icon.svg';

const Search = () => {
  return (
    <div className={styles.search}>
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
