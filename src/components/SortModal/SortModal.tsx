import classNames from 'classnames';

import styles from './SortModal.module.scss';

import { ReactComponent as CloseIcon } from '../../assets/icons/close_button.svg';
import {
  selectIdModalOpen,
  selectSortType,
} from '../../features/Home/selectors';
import { setIdModalOpen, setSortType } from '../../features/Home/slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { SortType } from '../../types/default';
import { sortText } from '../../types/text';

const sortTypes = Object.keys(sortText) as SortType[];

const SortModal = () => {
  const sortType = useAppSelector(selectSortType);
  const isModalOpen = useAppSelector(selectIdModalOpen);
  const dispatch = useAppDispatch();

  const option = { [styles.active]: isModalOpen };
  const classes = classNames(styles['sort-modal'], option);

  const closeModal = () => {
    dispatch(setIdModalOpen(false));
    document.body.style.overflow = '';
  };

  const changeSortType = (sortType: SortType) => {
    dispatch(setSortType(sortType));
    setTimeout(closeModal, 200);
  };

  return (
    <div className={classes}>
      <div className={styles['sort-modal__overlay']} onClick={closeModal}></div>
      <div className={styles['sort-modal__content']}>
        <header className={styles['sort-modal__header']}>
          <h2 className={styles['sort-modal__title']}>Сортировка</h2>
          <button className={styles['sort-modal__close-button']}>
            <CloseIcon
              className={styles['sort-modal__close-icon']}
              onClick={closeModal}
            />
          </button>
        </header>
        <form className={styles['sort-modal__form']}>
          {sortTypes.map((type, idx) => (
            <label
              className={styles['sort-modal__item']}
              htmlFor={`sortType${idx}`}
              key={idx}
            >
              <input
                className={styles['sort-modal__radio-button']}
                type="radio"
                id={`sortType${idx}`}
                name="sort-type"
                value={type}
                onChange={() => changeSortType(type)}
                checked={sortType === type}
              />
              {sortText[type]}
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};

export default SortModal;
