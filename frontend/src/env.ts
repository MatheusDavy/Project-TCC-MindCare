import { z } from 'zod';

export const envSchema = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string(),
    NEXT_PUBLIC_JWT_TOKEN_KEY: z.string(),
    NEXT_PUBLIC_GENDER_API_KEY: z.string().nonempty(),
});

export const env = envSchema.parse({
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_JWT_TOKEN_KEY: process.env.NEXT_PUBLIC_JWT_TOKEN_KEY,
    NEXT_PUBLIC_GENDER_API_KEY: process.env.NEXT_PUBLIC_GENDER_API_KEY
});
