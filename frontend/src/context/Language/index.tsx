'use client';

import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { defaultContextData } from './types';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const LanguageContext = createContext(defaultContextData);

type Props = {
    children: ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
    const [language, setLanguage] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    const params = router.asPath.split('?')[1];
    const url = `${pathname}/?${params || ''}`;

    useEffect(() => {
        router.push(url, url, { locale: language });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language]);

    useEffect(() => {
        const { locale } = router;
        const hasCookies = Cookies.get('MindCareLang');
        if (hasCookies) {
            setLanguage(hasCookies);
        } else {
            setLanguage(locale!);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);

    const { language, setLanguage } = context;

    return {
        language,
        setLanguage,
    };
};
