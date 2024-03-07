// Contexts
import { QueryClientProvider, QueryClient } from 'react-query';
import { DialogAlertProvider } from './Messages/Message.context';
import { UserProvider } from './User/User.context';
import { SessionProvider } from 'next-auth/react';
import { defaulTheme } from 'src/styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'src/styles/global';
import { DialogActionsProvider } from './Dialog/Dialog.context';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
});

export default function Providers({ children }) {
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={defaulTheme}>
                    <DialogActionsProvider>
                        <DialogAlertProvider>
                            <UserProvider>
                                {children}
                                <GlobalStyle />
                            </UserProvider>
                        </DialogAlertProvider>
                    </DialogActionsProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </SessionProvider>
    );
}
