import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';

import styles from './Bar.module.scss';

import { selectSortType } from '../../features/Home/selectors';
import getShortBirthDate from '../../helpers/getShortBirthDate';
import { useAppSelector } from '../../hooks/redux';
import { User } from '../../types/default';

interface Props {
  className?: string;
  user: User;
}

const Bar = ({ className, user }: Props) => {
  const barClasses = classNames(styles.bar, className);
  const sortType = useAppSelector(selectSortType);
  const shortBirthDate = getShortBirthDate(user.birthday);
  const navigate = useNavigate();

  const spanWithDate = (
    <span className={styles.bar__birthday}>{shortBirthDate}</span>
  );

  const onClick = () => navigate(`/${user.id}`);

  return (
    <div className={barClasses}>
      <img
        className={styles.bar__img}
        src={user.avatarUrl}
        alt="avatar"
        onClick={onClick}
      />
      <div className={styles.bar__info}>
        <h3 className={styles.bar__name} onClick={onClick}>
          {`${user.firstName} ${user.lastName}`}{' '}
          <span className={styles.bar__tag}>{user.userTag}</span>
        </h3>
        <span className={styles.bar__position}>{user.position}</span>
      </div>
      {sortType === 'birthday' && spanWithDate}
    </div>
  );
};

export default Bar;
