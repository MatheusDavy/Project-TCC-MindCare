import { useUserContext } from 'src/context/User/User.context';

export const useLogic = () => {
    const { userDatas, loadingUserDatas } = useUserContext();

    return {
        data: {
            userDatas,
            loadingUserDatas
        },
        methods: {},
    };
};
