/** @format */

import classNames from 'classnames';

import { ButtonType } from '../../types';

import styles from './styles.module.scss';

interface IButtonProps {
  Icon?: any;
  text: string;
  type?: ButtonType;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  Icon,
  text,
  type = ButtonType.primary,
  onClick = () => {},
  disabled = false,
}: IButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={classNames(styles.btn, {
      [styles['btn_default']]: type === 'default',
      [styles['btn_default2']]: type === 'default2',
      [styles['btn_primary']]: type === 'primary',
      [styles['btn_secondary']]: type === 'secondary',
    })}
  >
    {Icon && <Icon className={styles['btn-icon']} />}
    <span className={styles['btn-text']}>{text}</span>
  </button>
);

export default Button;
