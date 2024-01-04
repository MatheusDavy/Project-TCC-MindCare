import React from 'react';
import { describe, test } from '@jest/globals';
import { customWithTheme, screen } from '../../../../utils/jest/render';

// Internationalization
import { NextIntlClientProvider } from 'next-intl';
import { DialogAlertProvider } from '../../../../context/Messages/Message.context';

// Component
import DialogAlert from './Alert.comp';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('Messages - en-US', () => {
    const locale = 'en-US';
    const messages = require(`../../../../languages/${locale}.json`);

    test('it should be render a error message - Email already registered!', () => {
        customWithTheme(
            <NextIntlClientProvider locale={locale}   timeZone='America/Sao_Paulo' messages={messages}>
                <DialogAlertProvider>
                    <DialogAlert
                        type="error"
                        message="email-already-exists"
                        open={true}
                    />
                </DialogAlertProvider>
            </NextIntlClientProvider>
        );

        const text = 'Email already registered!';
        const elementWithText = screen.getByText(text);

        expect(elementWithText).toBeInTheDocument();
    });

    test('it should be render a success message - User successfully registered!', () => {
        customWithTheme(
            <NextIntlClientProvider locale={locale}   timeZone='America/Sao_Paulo' messages={messages}>
                <DialogAlertProvider>
                    <DialogAlert
                        type="success"
                        message="user-successfully-registered"
                        open={true}
                    />
                </DialogAlertProvider>
            </NextIntlClientProvider>
        );

        const text = 'User successfully registered!';
        const elementWithText = screen.getByText(text);

        expect(elementWithText).toBeInTheDocument();
    });
});

describe('Messages - pt-BR', () => {
    const locale = 'pt-BR';
    const messages = require(`../../../../languages/${locale}.json`);

    test('it should be render a error message - Email já cadastrado!', () => {
        customWithTheme(
            <NextIntlClientProvider locale={locale}   timeZone='America/Sao_Paulo' messages={messages}>
                <DialogAlertProvider>
                    <DialogAlert
                        type="error"
                        message="email-already-exists"
                        open={true}
                    />
                </DialogAlertProvider>
            </NextIntlClientProvider>
        );

        const text = 'Email já cadastrado!';
        const elementWithText = screen.getByText(text);

        expect(elementWithText).toBeInTheDocument();
    });

    test('it should be render a success message - Usuário cadastrado com sucesso!', () => {
        customWithTheme(
            <NextIntlClientProvider locale={locale}   timeZone='America/Sao_Paulo' messages={messages}>
                <DialogAlertProvider>
                    <DialogAlert
                        type="success"
                        message="user-successfully-registered"
                        open={true}
                    />
                </DialogAlertProvider>
            </NextIntlClientProvider>
        );

        const text = 'Usuário cadastrado com sucesso!';
        const elementWithText = screen.getByText(text);

        expect(elementWithText).toBeInTheDocument();
    });
});
