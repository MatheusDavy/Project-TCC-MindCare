import { UserRole } from './users.role';

export type User = {
    name?: string;
    email?: string;
    role?: UserRole;
    utilsInfo?: {
        avatar?: string | undefined;
        cep?: number | undefined;
        document?: number | undefined;
        city?: string | undefined;
        age?: number | undefined;
        state?: string | undefined;
    };

    password?: string;
};
