import classNames from 'classnames';

import styles from './Bar.module.scss';

interface Props {
  className?: string;
  imgUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  position: string;
  onClick?: React.MouseEventHandler;
}

const Bar = ({
  className,
  imgUrl,
  firstName,
  lastName,
  userTag,
  position,
}: Props) => {
  const barClasses = classNames(styles.bar, className);

  return (
    <div className={barClasses}>
      <img className={styles.bar__img} src={imgUrl} alt="avatar" />
      <div className={styles.bar__info}>
        <h3 className={styles.bar__name}>
          {`${firstName} ${lastName}`}{' '}
          <span className={styles.bar__tag}>{userTag}</span>
        </h3>
        <span className={styles.bar__position}>{position}</span>
      </div>
    </div>
  );
};

export default Bar;
