import { Link } from 'react-router-dom';

import styles from './Profile.module.scss';

import { ReactComponent as BirthdayIcon } from '../../assets/icons/birthday_icon.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/go_back_icon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone_icon.svg';
import calculateAge from '../../helpers/calculateAge';
import formatTel from '../../helpers/formatTel';
import getBirthDate from '../../helpers/getBirthDate';

interface Props {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  position: string;
  birthday: string;
  phone: string;
}

const Profile = (props: Props) => {
  const birthDate = getBirthDate(props.birthday);
  const age = calculateAge(props.birthday);
  const tel = formatTel(props.phone);

  return (
    <div className={styles.profile}>
      <header className={styles.profile__header}>
        <Link className={styles.profile__back} to="/">
          <BackIcon />
        </Link>
        <img className={styles.profile__avatar} src={props.avatarUrl} alt="" />
        <h2 className={styles.profile__name}>
          {`${props.firstName} ${props.lastName}`}
          <span className={styles.profile__tag}>{props.userTag}</span>
        </h2>
        <span className={styles.profile__position}>{props.position}</span>
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
          <a className={styles.profile__tel} href={`tel:${props.phone}`}>
            <PhoneIcon className={styles.profile__icon} />
            {tel}
          </a>
        </div>
      </main>
    </div>
  );
};

export default Profile;
