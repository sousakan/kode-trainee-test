import styles from './Container.module.scss';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
