export type DepartmentType =
  | 'all'
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
  userTag: string;
  department: DepartmentType;
  position: string;
  birthday: string;
  phone: string;
}

export interface BackendResponse {
  items: User[];
}
