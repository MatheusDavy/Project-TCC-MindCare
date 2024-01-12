import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema, defaultValues } from './Forms.scheme';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { configureUseForm } from 'src/utils/forms/configure-use-form';
import { useRepository } from 'src/repository';
import useDialogAlert from 'src/hooks/useDialogAlert';
import { useUserContext } from 'src/context/User/User.context';
import { User } from 'src/types/users/usert.types';
import { flattenObject } from 'src/utils/forms/flatten-object';

export const useLogic = () => {
    const { userDatas, refreshUserDatas, loadingUserDatas } = useUserContext();
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);

    const dialogAlert = useDialogAlert();
    const { userRepository } = useRepository();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: User) => {
        setLoading(true);
        userRepository.updateMe(data)
            .then(({ data }) => {
                console.log(data);
                dialogAlert.responseSuccess({
                    message: data,
                });
                refreshUserDatas();
            })
            .catch(error => {
                dialogAlert.responseError(error.response.data);
            });

        setLoading(false);
        setEdit(false);
    };

    const setUserDatas = () => {
        if (userDatas){
            configureUseForm(setValue, flattenObject(userDatas));
        }
    };

    const getUserAddressInfo = async (code: number) => {
        try {
            const response = await axios.get(
                `https://viacep.com.br/ws/${code}/json/`
            );
            const datas = {
                city: response.data.localidade,
                state: response.data.uf,
            };
            configureUseForm(setValue, datas);
        } catch (error) {};
    };

    useEffect(() => {
        setUserDatas();
    }, [userDatas]);

    return {
        data: { loading, edit, control, errors, loadingUserDatas },
        methods: {
            setEdit,
            onSubmit,
            handleSubmit,
            getUserAddressInfo,
        },
    };
};
