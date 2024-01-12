import { Dispatch, SetStateAction } from 'react';

export type LanguagesContextProps = {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
};

export const defaultContextData: LanguagesContextProps = {
    language: '',
    setLanguage: () => {},
};
