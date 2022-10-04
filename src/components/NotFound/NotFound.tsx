import styles from './NotFound.module.scss';

import notfoundImg from '../../assets/images/notfound.png';

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <div className={styles.notfound__content}>
        <img
          className={styles.notfound__img}
          src={notfoundImg}
          alt="not found"
        />
        <h2 className={styles.notfound__title}>Мы никого не нашли</h2>
        <p className={styles.notfound__text}>Попробуй скорректировать запрос</p>
      </div>
    </div>
  );
};

export default NotFound;
