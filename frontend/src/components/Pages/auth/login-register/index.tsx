// Next
import { useState } from 'react';

import { FormsLogin } from './FormsLogin/Forms.comp';
import { FormsRegister } from './FormsRegister/Forms.comp';
import { Banner } from './Banner/Banner.comp';

export function Structure() {
    const [view, setView] = useState<'register' | 'login'>('login');

    return (
        <>
            <Banner view={view} />
            <FormsLogin
                view={view}
                changeToRegister={() => {
                    setView('register');
                }}
            />
            <FormsRegister
                view={view}
                changeToLogin={() => {
                    setView('login');
                }}
            />
        </>
    );
}
