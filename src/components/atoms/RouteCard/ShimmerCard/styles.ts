import styled from 'styled-components';

import Skeleton from 'components/Skeleton';

interface SkeletonProps {
  width?: string;
  height?: string;
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 4px;

  margin: 1rem;
  height: 90%;
  width: 80%;
`;

export const SkeletonThumb = styled(Skeleton)`
  height: 45%;
  border-radius: 4px;
`;

export const SkeletonLabel = styled(Skeleton)<SkeletonProps>`
  height: ${({ height }) => height ?? '1rem'};
  width: ${({ width }) => width ?? '80%'};
`;
