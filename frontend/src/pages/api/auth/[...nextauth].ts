import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import AppleProvider from 'next-auth/providers/apple';

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID!,
            clientSecret: process.env
                .NEXT_PUBLIC_GOOGLE_OAUTH_SECRET_CLIENT_KEY_ID!,
        }),
        AppleProvider({
            clientId: process.env.NEXT_PUBLIC_APPLE_OAUTH_CLIENT_ID!,
            clientSecret: process.env
                .NEXT_PUBLIC_APPLE_OAUTH_SECRET_CLIENT_KEY_ID!,
        }),
    ],
};

export default NextAuth(authOptions);
