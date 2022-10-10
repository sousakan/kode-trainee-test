import classNames from 'classnames';

import styles from './Bar.module.scss';

import { selectSortType } from '../../features/Home/selectors';
import getShortBirthDate from '../../helpers/getShortBirthDate';
import { useAppSelector } from '../../hooks/redux';

interface Props {
  className?: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  position: string;
  birthday: string;
  onClick?: React.MouseEventHandler;
}

const Bar = ({
  className,
  avatarUrl,
  firstName,
  lastName,
  userTag,
  position,
  birthday,
}: Props) => {
  const barClasses = classNames(styles.bar, className);
  const sortType = useAppSelector(selectSortType);
  const shortBirthDate = getShortBirthDate(birthday);

  const spanWithDate = (
    <span className={styles.bar__birthday}>{shortBirthDate}</span>
  );

  return (
    <div className={barClasses}>
      <img className={styles.bar__img} src={avatarUrl} alt="avatar" />
      <div className={styles.bar__info}>
        <h3 className={styles.bar__name}>
          {`${firstName} ${lastName}`}{' '}
          <span className={styles.bar__tag}>{userTag}</span>
        </h3>
        <span className={styles.bar__position}>{position}</span>
      </div>
      {sortType === 'birthday' && spanWithDate}
    </div>
  );
};

export default Bar;
