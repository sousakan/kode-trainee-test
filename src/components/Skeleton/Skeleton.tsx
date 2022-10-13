import SkeletonBar from '../SkeletonBar';

const SKELETON_BAR_NUMBER = 10;

const Skeleton = () => {
  const skeletonBars = new Array(SKELETON_BAR_NUMBER)
    .fill(0)
    .map((_, idx) => <SkeletonBar key={idx} />);

  return <div>{skeletonBars}</div>;
};

export default Skeleton;
