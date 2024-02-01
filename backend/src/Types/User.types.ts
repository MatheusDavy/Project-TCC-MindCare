export type UserRole = 'USER' | 'ADMIN';

export type User = {
    name?: string;
    email?: string;
    role?: UserRole;
    avatar?: string | undefined | null;
    cep?: number | undefined | null;
    document?: string | undefined | null;
    city?: string | undefined | null;
    age?: number | undefined | null;
    state?: string | undefined | null;
    password?: string;
};
