import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { checkIsPublicRoute } from './utils/router/app-routes';
import { env } from './env';

export async function middleware(request: NextRequest) {
    // Verify if token is Valid
    const session =  request.cookies.get(env.NEXT_PUBLIC_JWT_TOKEN_KEY)?.value;

    const isPublicRoutes = checkIsPublicRoute(request.nextUrl.pathname);

    if (!session && !isPublicRoutes) {
        const url = request.nextUrl.clone();
        url.pathname = '/auth';
        return NextResponse.redirect(url);
    }

    if (session && isPublicRoutes) {
        return NextResponse.redirect(new URL('/dashboard/aprender', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/auth/:path*',
        '/dashboard/:path*',
    ],
};
