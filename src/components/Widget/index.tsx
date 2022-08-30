/** @format */

import { useContext } from 'react';

import Button from '../Button';
import Popup from '../Popup';
import Scroll from '../Scroll';

import { WidgetContext } from '../../context/WidgetProvider';

import { ReactComponent as BorrowerIcon } from '../../assets/icons/borrower.svg';
import { ReactComponent as LenderIcon } from '../../assets/icons/lender.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { ReactComponent as GuideIcon } from '../../assets/icons/guide.svg';

import styles from './styles.module.scss';
import { ButtonType, Step, UserType } from '../../types';

const getPopupTitles = (step: Step, user: UserType | '') => {
  switch (step) {
    case Step.UserType:
      return {
        title: <h1 className={styles.title}>Choose your role</h1>,
        subtitle: (
          <h2 className={styles.subtitle}>
            Please, choose your role in service.
          </h2>
        ),
      };
    case Step.SelectedUserType:
      return {
        title: <h1 className={styles.title}>the {user}</h1>,
        subtitle: (
          <h2 className={styles.subtitle}>
            You have choosen the role -{' '}
            <span className={styles['subtitle-user']}>the {user}.</span>
          </h2>
        ),
      };
    case Step.TermsAndConditions:
      return {
        title: <h1 className={styles.title}>Terms & Conditions</h1>,
        subtitle: (
          <h2 className={styles.subtitle}>
            You should obliged to apply the Terms & Conditions to use the
            servise.
          </h2>
        ),
      };
    default:
      return { title: null, subtitle: null };
  }
};

const Widget = () => {
  const { step, setStep, user, setUser, isOpen, setIsOpen } =
    useContext(WidgetContext);

  const setUserAndStep = (user: UserType) => {
    setUser(user);
    setStep(Step.SelectedUserType);
  };

  const footer =
    step === Step.SelectedUserType ? (
      <>
        <Button
          text="Guide flow"
          type={ButtonType.default2}
          onClick={() => setStep(Step.TermsAndConditions)}
          Icon={GuideIcon}
        />
        <div className={styles['footer-text']}>
          Study the guide flow for the convinience of using the service.
        </div>
      </>
    ) : null;

  return (
    <div className={styles.container}>
      <Popup
        {...getPopupTitles(step, user)}
        footer={footer}
        isOpen={isOpen}
        withCloseIcon={step === Step.TermsAndConditions}
        onCloseBtnClick={() => setIsOpen(false)}
      >
        {step === Step.UserType && (
          <div className={styles['btn-container']}>
            <Button
              text="The borrower"
              Icon={BorrowerIcon}
              onClick={() => setUserAndStep(UserType.Borrower)}
            />
            <Button
              text="The lender"
              Icon={LenderIcon}
              onClick={() => setUserAndStep(UserType.Lender)}
            />
          </div>
        )}
        {step === Step.SelectedUserType && (
          <div className={styles['btn-container']}>
            <Button
              text="Go to cabinet"
              onClick={() => setStep(Step.TermsAndConditions)}
              Icon={BorrowerIcon}
            />
            <Button
              text="Cancel"
              type={ButtonType.default}
              onClick={() => setIsOpen(false)}
              Icon={CloseIcon}
            />
          </div>
        )}
        {step === Step.TermsAndConditions && (
          <Scroll onButtonClick={() => setIsOpen(false)} />
        )}
      </Popup>
    </div>
  );
};

export default Widget;
