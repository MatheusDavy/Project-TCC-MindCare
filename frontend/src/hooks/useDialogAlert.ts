import { useContext } from 'react';
import { DialogAlertContext } from '../context/Messages/Message.context';

const useDialogAlert = () => {
    const dialogAlert = useContext(DialogAlertContext);

    const responseError = (errorPayload: any) => {
        const { message, statusCode, redirect } = errorPayload;

        dialogAlert.setData({
            type: 'error',
            message: message
                ? message
                : 'Desculpe! Ocorreu um erro ao tentar efetuar esta ação',
            open: true,
            redirect:
                statusCode == 401 ? '/auth/login' : redirect ? redirect : '',
        });
    };

    const responseSuccess = (errorPayload: any) => {
        const { message, redirect } = errorPayload;

        dialogAlert.setData({
            type: 'success',
            message: message ? message : 'Ação realizada com sucesso',
            redirect: redirect ? redirect : '',
            open: true,
        });
    };

    return {
        responseError,
        responseSuccess,
    };
};

export default useDialogAlert;
