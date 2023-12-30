import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { checkIsPublicRoute } from './utils/router/app-routes';
import { verifyTokenAuth } from './utils/auth/verify-token-auth';

export async function middleware(request: NextRequest) {
    // Verify if token is Valid
    const session = await verifyTokenAuth(
        request.cookies.get(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY!)?.value
    );
    const isPublicRoutes = checkIsPublicRoute(request.nextUrl.pathname);

    if (!session && !isPublicRoutes) {
        const url = request.nextUrl.clone();
        url.pathname = '/auth/login';
        return NextResponse.redirect(url);
    }

    if (session && isPublicRoutes) {
        return NextResponse.redirect(new URL('/client', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/(pt-BR|pt-BR)/:path*', // i18n
        '/auth/:path*',
        '/client/',
        '/client/:path*',
    ],
};
