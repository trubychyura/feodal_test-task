/** @format */

import { ReactNode } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

import styles from './styles.module.scss';

interface IPopupProps {
  withCloseIcon: boolean;
  isOpen: boolean;
  title: ReactNode;
  subtitle: ReactNode;
  footer: ReactNode;
  children: ReactNode;
  onCloseBtnClick: () => void;
}

const Popup = ({
  withCloseIcon,
  onCloseBtnClick,
  isOpen,
  title,
  subtitle,
  footer,
  children,
}: IPopupProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {withCloseIcon && (
          <button onClick={onCloseBtnClick} className={styles.btn}>
            <CloseIcon className={styles['btn-icon']} />
          </button>
        )}
      </div>
      <div className={styles.body}>
        {title && title}
        {subtitle && subtitle}
        {children}
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Popup;
