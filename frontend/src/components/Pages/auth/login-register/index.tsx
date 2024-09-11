// Next
import { useState } from 'react';

import { FormsLogin } from './FormsLogin';
import { FormsRegister } from './FormsRegister';
import { Banner } from './Banner';

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
