export type DepartmentType =
  | 'android'
  | 'ios'
  | 'design'
  | 'management'
  | 'qa'
  | 'back_office'
  | 'frontend'
  | 'hr'
  | 'pr'
  | 'backend'
  | 'support'
  | 'analytics';

export type SortType = 'alphabetical' | 'birthday';

export interface User {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: [string, string];
  department: DepartmentType;
  position: string;
  birthday: string;
  phone: string;
}
