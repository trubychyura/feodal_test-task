/** @format */

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { Step, UserType } from '../types';

export interface AppContextInterface {
  step: Step;
  user: UserType | '';
  isOpen: boolean;
  setStep: Dispatch<SetStateAction<Step>>;
  setUser: Dispatch<SetStateAction<'' | UserType>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const WidgetContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export const WidgetProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<Step>(Step.UserType);
  const [user, setUser] = useState<UserType | ''>('');
  const [isOpen, setIsOpen] = useState(true);

  const value = { step, setStep, user, setUser, isOpen, setIsOpen };

  return (
    <WidgetContext.Provider value={value}>{children}</WidgetContext.Provider>
  );
};
