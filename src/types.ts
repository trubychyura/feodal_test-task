/** @format */

export enum Step {
  UserType = 'USER_TYPE',
  SelectedUserType = 'SELECTER_USER_TYPE',
  TermsAndConditions = 'TERMS_&_CONDITIONS',
}

export enum UserType {
  Borrower = 'Borrower',
  Lender = 'Lender',
}

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  default = 'default',
  default2 = 'default2',
}

export interface Data {
  start: string;
  appointments: Array<{ start: string; duration: number }>;
  end: string;
}
