import { Link, useParams } from 'react-router-dom';

import styles from './Profile.module.scss';

import { ReactComponent as BirthdayIcon } from '../../assets/icons/birthday_icon.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/go_back_icon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone_icon.svg';
import {
  selectLoadingStatus,
  selectUsers,
} from '../../features/Home/selectors';
import calculateAge from '../../helpers/calculateAge';
import formatTel from '../../helpers/formatTel';
import getBirthDate from '../../helpers/getBirthDate';
import { useAppSelector } from '../../hooks/redux';
import Loader from '../Loader';
import NotFoundPage from '../NotFoundPage';

const Profile = () => {
  const users = useAppSelector(selectUsers);
  const loadingStatus = useAppSelector(selectLoadingStatus);

  const { userId } = useParams();
  const user = users.find((u) => u.id === userId);

  if (loadingStatus === 'pending') return <Loader />;

  if (!user) return <NotFoundPage />;

  const birthDate = getBirthDate(user.birthday);
  const age = calculateAge(user.birthday);
  const tel = formatTel(user.phone);

  return (
    <div className={styles.profile}>
      <header className={styles.profile__header}>
        <Link className={styles.profile__back} to="/">
          <BackIcon />
        </Link>
        <img className={styles.profile__avatar} src={user.avatarUrl} alt="" />
        <h2 className={styles.profile__name}>
          {`${user.firstName} ${user.lastName}`}
          <span className={styles.profile__tag}>{user.userTag}</span>
        </h2>
        <span className={styles.profile__position}>{user.position}</span>
      </header>
      <main className={styles.profile__main}>
        <div className={styles.profile__row}>
          <span className={styles.profile__birthday}>
            <BirthdayIcon className={styles.profile__icon} />
            {birthDate}
          </span>
          <span className={styles.profile__age}>{age}</span>
        </div>
        <div className={styles.profile__row}>
          <a className={styles.profile__tel} href={`tel:${user.phone}`}>
            <PhoneIcon className={styles.profile__icon} />
            {tel}
          </a>
        </div>
      </main>
    </div>
  );
};

export default Profile;
