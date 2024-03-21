import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { defaultContextData } from './User.types';
import { destroyCookie, parseCookies } from 'nookies';
import { useRepository } from 'src/repository';
import { User } from 'src/types/users/usert.types';
import { env } from 'src/env';
import { useRouter } from 'next/router';

const UserContext = createContext(defaultContextData);

type Props = {
    children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
    const [userDatas, setUserDatas] = useState<User | null>(null);
    const [loadingUserDatas, setLoadinUserDatas] = useState(true);
    const { userRepository } = useRepository();
    const router = useRouter();

    const refreshUserDatas = async () => {
        setLoadinUserDatas(true);
        await userRepository
            .getMe()
            .then(async ({ data }) => {
                setUserDatas(data);
            })
            .catch(() => {
                destroyCookie(null, env.NEXT_PUBLIC_JWT_TOKEN_KEY);
                router.push('/auth');
            });
        setLoadinUserDatas(false);
    };

    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies[env.NEXT_PUBLIC_JWT_TOKEN_KEY];

        console.log(token);

        if (token) {
            refreshUserDatas();
        }
    }, []);

    return (
        <UserContext.Provider
            value={{
                refreshUserDatas,
                loadingUserDatas,
                userDatas,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);

    const {
        refreshUserDatas,
        loadingUserDatas,
        userDatas,
    } = context;

    return {
        refreshUserDatas,
        loadingUserDatas,
        userDatas,
    };
};
