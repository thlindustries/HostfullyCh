import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Overlay } from './styles';

type ModalProps = {
  children?: React.ReactNode;
  isOpen?: boolean;
  center?: boolean;
  element?: Element;
  className?: string;
  onClick?: () => void;
};

export const Modal = ({
  children,
  isOpen = false,
  center = false,
  element,
  className = '',
  onClick,
}: ModalProps): JSX.Element => {
  const [isDOMReady, setIsDOMReady] = useState(false);

  useEffect(() => {
    setIsDOMReady(true);
  }, []);

  return isDOMReady ? (
    createPortal(
      <Overlay
        onClick={onClick}
        center={center}
        className={`${
          isOpen ? 'modal-overlay-on' : 'modal-overlay-off'
        } ${className}`}
      >
        {children}
      </Overlay>,
      element ?? (document.getElementById('root') as Element),
    )
  ) : (
    <></>
  );
};
