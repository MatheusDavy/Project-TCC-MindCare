import { z } from 'zod';

export const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    SECRET_TOKEN: z.string(),
    APPLICATION_PORT: z.string(),
    ACCESS_CONTROL_PORTS: z.string(),
    NODEMAILER_USER: z.string().email(),
    NODEMAILER_PASSWORD: z.string(),
    FRONT_APPLICATION_DOMAIN: z.string().url()
})

export const env = envSchema.parse(process.env);