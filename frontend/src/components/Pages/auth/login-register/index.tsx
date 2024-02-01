// Next
import { useState } from 'react';


import { FormsLogin } from './FormsLogin/Forms.comp';
import { FormsRegister } from './FormsRegister/Forms.comp';
import { Banner } from './Banner/Banner.comp';

export function AuthLoginRegister() {
    const [view, setView] = useState<'register' | 'login'>('login');

    return (
        <main className="bg-white w-full max-w-[100dvw] h-[100vh]">
            <div className='h-full w-full max-w-[100dvw] overflow-x-hidden relative container'>
                <Banner view={view} />
                <FormsLogin view={view} changeToRegister={() => { setView('register'); }} />
                <FormsRegister view={view} changeToLogin={() => { setView('login'); }} />
            </div>
        </main>
    );
}

