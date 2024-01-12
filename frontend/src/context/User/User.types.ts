/* eslint-disable no-unused-vars */
import { User } from 'src/types/users/usert.types';

export type LanguagesContextProps = {
    loadingUserDatas: boolean;
    userDatas: User | null;
    verifyCache: () => void
    refreshUserDatas: () => void
};

export const defaultContextData: LanguagesContextProps = {
    loadingUserDatas: true,
    userDatas: null,
    verifyCache: () => null,
    refreshUserDatas: () => null
};
