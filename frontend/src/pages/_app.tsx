'use client';

// Next
import type { AppProps } from 'next/app';
import '../styles/tailwind/globals.css';

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

// Internationalizations
import {NextIntlClientProvider} from 'next-intl';
import {useRouter} from 'next/router';
import { LanguageProvider } from '../context/Language/Language.context';

export default function MyApp({ Component, pageProps}: AppProps) {
    const getLayout = Component.getLayout || ((page: ReactNode) => page);
    const router = useRouter();

    return (
        <SessionProvider>
            <NextIntlClientProvider
                locale={router.locale}
                timeZone='America/Sao_Paulo'
                messages={pageProps.messages}
            >
                <LanguageProvider>
                    <ThemeProvider theme={defaulTheme}>
                        <DialogAlertProvider>
                            {getLayout(
                                <Component {...pageProps} />
                            )}
                            <GlobalStyle />
                        </DialogAlertProvider>
                    </ThemeProvider>
                </LanguageProvider>
            </NextIntlClientProvider>
        </SessionProvider>
    );
}

