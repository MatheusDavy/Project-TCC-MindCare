import { UserRole } from './users.role';

export type User = {
    id: string;
    role: UserRole;
    email: string;
    name: string;
  };
