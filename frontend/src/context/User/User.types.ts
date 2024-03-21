/* eslint-disable no-unused-vars */
import { User } from 'src/types/users/usert.types';

export type LanguagesContextProps = {
    loadingUserDatas: boolean;
    userDatas: User | null;
    refreshUserDatas: () => void;
};

export const defaultContextData: LanguagesContextProps = {
    loadingUserDatas: true,
    userDatas: null,
    refreshUserDatas: () => null
};
