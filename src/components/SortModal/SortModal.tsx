import styles from './SortModal.module.scss';

import { ReactComponent as CloseIcon } from '../../assets/icons/close_button.svg';
import { SortType } from '../../types/default';
import { sortText } from '../../types/text';

const sortTypes = Object.keys(sortText) as SortType[];

const SortModal = () => {
  return (
    <div className={styles['sort-modal']}>
      <div className={styles['sort-modal__overlay']}></div>
      <div className={styles['sort-modal__content']}>
        <header className={styles['sort-modal__header']}>
          <h2 className={styles['sort-modal__title']}>Сортировка</h2>
          <button className={styles['sort-modal__close-button']}>
            <CloseIcon className={styles['sort-modal__close-icon']} />
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
