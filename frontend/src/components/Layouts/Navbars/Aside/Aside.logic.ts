import { useEffect, useState } from 'react';
import { UserDataTypes } from './Aside.types';
import { useRepository } from '../../../../repository';
import useDialogAlert from '../../../../hooks/useDialogAlert';

export const useLogic = () => {
    const [userData, setUserData] = useState<UserDataTypes>(null);
    const { userRepository } = useRepository();
    const dialogAlert = useDialogAlert();

    const getUserDatas = () => {
        userRepository
            .getMe()
            .then(({ data }) => {
                setUserData({
                    name: data.name,
                    avatar: data.avatar,
                });
            })
            .catch(error => {
                console.log(error);
                dialogAlert.responseError(error.response.data);
            });
    };

    const getAvatarUser = async () => {
        if (!userData?.avatar) {
            const apiUrl = `https://api.genderize.io?name=${userData?.name}`;

            try {
                const resposta = await fetch(apiUrl);
                const dados = await resposta.json();

                if (dados.gender) {
                    if (dados.gender == 'male') {
                        setUserData(prev => ({ ...prev, avatar: 'te' }));
                    } else {
                        setUserData(prev => ({ ...prev, avatar: 'te' }));
                    }
                } else {
                    setUserData(prev => ({ ...prev, avatar: 'te' }));
                }
            } catch (erro) {
                setUserData(prev => ({ ...prev, avatar: 'te' }));
            }
        }
    };

    useEffect(() => {
        getUserDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getAvatarUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData]);

    return {
        data: {
            userData,
        },
        methods: {},
    };
};
