import { DepartmentType, SortType } from './default';

export const departmentText: Record<DepartmentType, string> = {
  android: 'Android',
  ios: 'iOS',
  design: 'Дизайн',
  management: 'Менеджмент',
  qa: 'QA',
  back_office: 'Бэк-офис',
  frontend: 'Frontend',
  hr: 'HR',
  pr: 'PR',
  backend: 'Backend',
  support: 'Техподдержка',
  analytics: 'Аналитика',
};

export const sortText: Record<SortType, string> = {
  alphabetical: 'По алфавиту',
  birthday: 'По дню рождения',
};
