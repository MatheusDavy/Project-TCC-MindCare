import { UserRole } from './users.role';

export type User = {
    name?: string;
    nickname?:string
    email?: string;
    role?: UserRole;
    utilsInfo?: {
        avatar?: string;
        cep?: number | null;
        document?: string | null;
        city?: string;
        age?: number | null;
        state?: string;
    };

    password?: string;
};
