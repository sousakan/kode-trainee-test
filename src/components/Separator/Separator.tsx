import styles from './Separator.module.scss';

const Separator = () => {
  const year = new Date().getFullYear() + 1;

  return <span className={styles.separator}>{year}</span>;
};

export default Separator;
