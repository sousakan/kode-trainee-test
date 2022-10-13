import styles from './HomeContent.module.scss';

import { selectActiveTab } from '../../features/Home/selectors';
import { useAppSelector } from '../../hooks/redux';
import { useGetUsersByDepQuery } from '../../services/users';
import Bars from '../Bars';
import Error from '../Error';
import NotFound from '../NotFound';
import Skeleton from '../Skeleton';

const HomeContent = () => {
  const activeTab = useAppSelector(selectActiveTab);
  const {
    data: users = [],
    isFetching,
    isError,
    refetch,
  } = useGetUsersByDepQuery(activeTab);

  function renderElement() {
    if (isFetching) return <Skeleton />;

    if (isError) return <Error refetch={refetch} />;

    return <Bars users={users} />;
  }

  return <main className={styles.content}>{renderElement()}</main>;
};

export default HomeContent;
