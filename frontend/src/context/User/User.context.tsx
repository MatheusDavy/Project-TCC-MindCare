import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { defaultContextData } from './User.types';
import Cookies from 'js-cookie';
import { useRepository } from 'src/repository';
import { User } from 'src/types/users/usert.types';

const UserContext = createContext(defaultContextData);

type Props = {
    children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
    const [userDatas, setUserDatas] = useState<User | null>(null);
    const [loadingUserDatas, setLoadinUserDatas] = useState(true);
    const { userRepository } = useRepository();

    const verifyCache = async () => {
        const data = await Cookies.get(process.env.NEXT_PUBLIC_USER_DATAS);
        if (!data) {
            await getUserInfo();
        } else {
            setUserDatas(JSON.parse(data));
        }

        setLoadinUserDatas(false);
    };

    const getUserInfo = async () => {
        setLoadinUserDatas(true);
        await userRepository
            .getMe()
            .then(async ({ data }) => {
                if (!data.utilsInfo?.avatar) {
                    data = {
                        ...data,
                        utilsInfo: {
                            ...data.utilsInfo,
                            avatar: await setUserAvatar(data.name),
                        },
                    };
                }
                Cookies.set(
                    process.env.NEXT_PUBLIC_USER_DATAS,
                    JSON.stringify(data)
                );
                setUserDatas(data);
            })
            .catch(() => {
                setUserDatas(null);
            });
        setLoadinUserDatas(false);
    };

    const setUserAvatar = async (name: string) => {
        const apiUrl = `https://gender-api.com/get?name=${name}&key=${process.env.NEXT_PUBLIC_GENDER_API_KEY}`;
        try {
            const resposta = await fetch(apiUrl);
            const dados = await resposta.json();

            if (dados.gender) {
                return dados.gender === 'male'
                    ? '/images/profiles/profile-man.webp'
                    : '/images/profiles/profile-woman.webp';
            }
        } catch (erro) {
            console.log(erro);
        }
    };

    const refreshUserDatas = async () => {
        await Cookies.remove(process.env.NEXT_PUBLIC_USER_DATAS);
        verifyCache();
    };

    useEffect(() => {
        verifyCache();
    }, []);

    return (
        <UserContext.Provider
            value={{
                loadingUserDatas,
                userDatas,
                verifyCache,
                refreshUserDatas,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);

    const {
        loadingUserDatas,
        userDatas,
        verifyCache,
        refreshUserDatas,
    } = context;

    return {
        loadingUserDatas,
        userDatas,
        verifyCache,
        refreshUserDatas,
    };
};
