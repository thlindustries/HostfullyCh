import { CardContainer, SkeletonThumb, SkeletonLabel } from './styles';

export const ShimmerCard = (): JSX.Element => {
  return (
    <CardContainer>
      <SkeletonThumb />
      <SkeletonLabel width="80%" />
      <SkeletonLabel width="60%" />
      <SkeletonLabel width="30%" />
    </CardContainer>
  );
};
