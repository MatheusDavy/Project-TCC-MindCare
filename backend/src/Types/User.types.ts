export type UserRole = 'USER' | 'ADMIN';

export type User = {
    name?: string;
    email?: string;
    role?: UserRole;
    avatar?: string | undefined;
    cep?: number | undefined;
    document?: number | undefined;
    city?: string | undefined;
    age?: number | undefined;
    state?: string | undefined;
    password?: string;
};
