import styled, { css } from 'styled-components';

interface OverlayProps {
  center: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 20;

  transition: background-color 0.2s, opacity 0.2s, visibility 0.4s;

  overflow-y: auto;

  &.modal-overlay-off {
    opacity: 0;
    visibility: hidden;
  }

  &.modal-overlay-on {
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 1;
    backdrop-filter: blur(4px) grayscale(0.5);
  }

  ${({ center }) =>
    center
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : null}
`;
