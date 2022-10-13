import { useNavigate } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

import notfoundImg from '../../assets/images/notfound.png';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const onClick = () => navigate('/');

  return (
    <div className={styles.notfound}>
      <div className={styles.notfound__content}>
        <img
          className={styles.notfound__img}
          src={notfoundImg}
          alt="not found"
        />
        <h2 className={styles.notfound__title}>Страница не найдена</h2>
        <p className={styles.notfound__text}>
          Пожалуйста, введите корректный URL
        </p>
        <button className={styles.notfound__button} onClick={onClick}>
          Перейти на главную
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
