// Next
import { useState } from 'react';


import { FormsLogin } from './FormsLogin/Forms.comp';
import { FormsRegister } from './FormsRegister/Forms.comp';
import { Banner } from './Banner/Banner.comp';

export function AuthLoginRegister() {
    const [view, setView] = useState<'register' | 'login'>('register');

    return (
        <main className="bg-white w-full h-[100vh]">
            <div className='h-full relative container'>
                <Banner view={view} />
                <FormsLogin view={view} changeToRegister={() => { setView('register'); }} />
                <FormsRegister view={view} changeToLogin={() => { setView('login'); }} />
            </div>
        </main>
    );
}

