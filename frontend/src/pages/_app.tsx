'use client';

// Next
import type { AppProps } from 'next/app';
import '../styles/tailwind/global.css';

// Logic
// import useLogic from './_app.logic';

// Themes / Styles
import { defaulTheme } from '../styles/themes/default';
import { GlobalStyle } from '../styles/global';


// Context / Providers
import { ThemeProvider } from 'styled-components';
import { DialogAlertProvider } from '../context/Messages/Message.context';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function MyApp({ Component, pageProps}: AppProps) {
    // const { data, methods } = useLogic();
    const getLayout = Component.getLayout || ((page: ReactNode) => page);

    return (
        <SessionProvider>
            <DialogAlertProvider>
                <ThemeProvider theme={defaulTheme}>
                    {getLayout(
                        <Component {...pageProps} />
                    )}
                    <GlobalStyle />
                </ThemeProvider>
            </DialogAlertProvider>
        </SessionProvider>
    );
}
