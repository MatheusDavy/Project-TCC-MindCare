'use client';

// Next
import type { AppProps } from 'next/app';
import '../styles/tailwind/globals.css';

// Context / Providers
import { ReactNode } from 'react';

import Providers from 'src/context';

export default function MyApp({ Component, pageProps}: AppProps) {
    const getLayout = Component.getLayout || ((page: ReactNode) => page);

    return (
        <Providers>
            {getLayout(
                <Component {...pageProps} />
            )}
        </Providers>
    );
}

