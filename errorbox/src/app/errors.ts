export interface Error {
  code: string;
  message: string;
  status: number;
}

export const errors = [
  {
    code: 'E001',
    message: 'please input first name',
    status: 0
  },
  {
    code: 'E002',
    message: 'please input last name',
    status: 0
  },
  {
    code: 'E003',
    message: 'please input age',
    status: 0
  },
  {
    code: 'W001',
    message: 'please input city',
    status: 0
  },
  {
    code: 'W002',
    message: 'please input school',
    status: 0
  }
];