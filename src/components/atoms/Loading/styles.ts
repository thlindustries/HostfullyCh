import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface ContainerProps {
  size?: number;
  customColors?: string[];
}

export const RoundSpanContainer = styled.div<ContainerProps>`
  position: relative;

  ${(props) =>
    props.size === 0 &&
    css`
      width: 3rem;
      height: 3rem;
    `}
  ${(props) =>
    props.size !== 0 &&
    css`
      width: ${props.size}rem;
      height: ${props.size}rem;
    `}

  span {
    display: block;

    ${(props) =>
      props.size !== 0 &&
      css`
        width: ${props.size}rem;
        height: ${props.size}rem;
      `}

    ${(props) =>
      props.size === 0 &&
      css`
        width: 3rem;
        height: 3rem;
      `}

    border-top: 0.2rem solid ${({ theme }) => theme.colors.colorPrimary};
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primaryBg};
    border-left: 0.2rem solid ${({ theme }) => theme.colors.primaryBg};
    border-right: 0.2rem solid ${({ theme }) => theme.colors.primaryBg};

    border-radius: 50%;
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.4);

    box-sizing: border-box;
    top: 0;
    left: 0;

    position: absolute;
  }
`;

export const DotWaveContainer = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
`;

export const DotWave = styled(motion.span)`
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background: #878c99;
  border-radius: 50%;
`;
