import styles from './Error.module.scss';

import errorImg from '../../assets/images/error_page_image.png';
import { fetchUsers } from '../../features/Home/asyncActions';
import { useAppDispatch } from '../../hooks/redux';

const Error = () => {
  const dispatch = useAppDispatch();

  const onClick = () => dispatch(fetchUsers());

  return (
    <div className={styles.error}>
      <div className={styles.error__content}>
        <img className={styles.error__img} src={errorImg} alt="error" />
        <h2 className={styles.error__title}>Какой-то сверхразум все сломал</h2>
        <p className={styles.error__text}>Постараемся быстро починить</p>
        <button className={styles.error__button} onClick={onClick}>
          Попробовать снова
        </button>
      </div>
    </div>
  );
};

export default Error;
