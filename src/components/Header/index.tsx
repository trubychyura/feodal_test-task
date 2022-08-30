/** @format */
import { useContext } from 'react';

import Menu from '../Menu';
import Button from '../Button';

import { WidgetContext } from '../../context/WidgetProvider';

import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg';
import { ReactComponent as SignUpIcon } from '../../assets/icons/signup.svg';
import Logo from '../../assets/icons/logo.svg';

import styles from './styles.module.scss';

import { ButtonType, Step } from '../../types';

const Header = () => {
  const { setUser, setStep, setIsOpen, isOpen } = useContext(WidgetContext);

  const onSignInClick = () => {
    setUser('');
    setStep(Step.UserType);
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="/" className={styles['logo-link']}>
          <img src={Logo} alt="Logotype" />
        </a>
      </div>
      <Menu />
      <div className={styles.actions}>
        <Button
          onClick={onSignInClick}
          text="Sign in"
          Icon={LockIcon}
          type={isOpen ? ButtonType.secondary : ButtonType.primary}
        />
        <Button text="Sign up" Icon={SignUpIcon} />
      </div>
    </div>
  );
};

export default Header;
