import { useTranslations } from 'next-intl';
import { useLanguageContext } from '../../../../context/Language';

export const useLogic = () => {
    const { language, setLanguage } = useLanguageContext();
    const t = useTranslations('Country');

    // Languages Data
    const selectLanguageDatas = [
        {
            flag: '/images/flags/flag-england.png',
            language: t('English'),
            code: 'en-US',
        },
        {
            flag: '/images/flags/flag-brazil.png',
            language: t('Portuguese'),
            code: 'pt-BR',
        },
    ];

    const handleChange = (lang: string) => {
        setLanguage(lang);
    };

    // Cookies.set('MindCareLang', String(language));
    return {
        data: { selectLanguageDatas, language },
        methods: {
            handleChange,
        },
    };
};
