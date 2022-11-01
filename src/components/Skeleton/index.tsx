import styled from 'styled-components';

interface SkeletonProps {
  animationDelay?: number;
}

export default styled.div<SkeletonProps>`
  transition: background-color 0.4s;

  animation: shimmer2 3s ease-in-out infinite;

  animation-delay: ${(props) =>
    props.animationDelay ? props.animationDelay : 0}s;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  @keyframes shimmer2 {
    0% {
      background: ${({ theme }) => theme.colors.skeletonBg0};
    }
    50% {
      background: ${({ theme }) => theme.colors.skeletonBg50};
    }
    100% {
      background: ${({ theme }) => theme.colors.skeletonBg100};
    }
  }
`;
