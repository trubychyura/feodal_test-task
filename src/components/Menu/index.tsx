/** @format */

import { useContext } from 'react';
import classNames from 'classnames';

import Button from '../Button';

import { WidgetContext } from '../../context/WidgetProvider';

import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg';
import { ReactComponent as SignUpIcon } from '../../assets/icons/signup.svg';

import styles from './styles.module.scss';

import { ButtonType, Step } from '../../types';

const Menu = () => {
  const { setUser, setStep, setIsOpen, isOpen } = useContext(WidgetContext);

  const onSignInClick = () => {
    setUser('');
    setStep(Step.UserType);
    setIsOpen(true);
  };

  return (
    <>
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <input id="menu-toggle" className="menu-checkbox" type="checkbox" />
      <ul className={styles.menu}>
        <li className={styles['menu-item']}>
          <a href="/" className={styles['menu-link']}>
            Expertise
          </a>
        </li>
        <li className={styles['menu-item']}>
          <a href="/" className={styles['menu-link']}>
            Industries
          </a>
        </li>
        <li className={styles['menu-item']}>
          <a href="/" className={styles['menu-link']}>
            News
          </a>
        </li>
        <li className={styles['menu-item']}>
          <a href="/" className={styles['menu-link']}>
            Partners
          </a>
        </li>
        <li className={styles['menu-item']}>
          <a href="/" className={styles['menu-link']}>
            Careers
          </a>
        </li>
        <li className={styles['menu-item']}>
          <a
            href="/"
            className={classNames(
              styles['menu-link'],
              styles['menu-link_with-arrow']
            )}
          >
            About Us
          </a>
        </li>
        <li
          className={classNames(styles['menu-item'], [
            styles['menu-item_actions'],
          ])}
        >
          <Button
            onClick={onSignInClick}
            text="Sign in"
            Icon={LockIcon}
            type={isOpen ? ButtonType.secondary : ButtonType.primary}
          />
          <Button text="Sign up" Icon={SignUpIcon} />
        </li>
      </ul>
    </>
  );
};

export default Menu;
