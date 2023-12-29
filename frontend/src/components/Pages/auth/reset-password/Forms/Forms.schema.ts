import yup from '../../../../../utils/forms/yup';

export interface FormData {
    password: string;
    passwordConfirmation: string;
}

export const defaultValues: FormData = {
    password: '',
    passwordConfirmation: '',
};

export const schema = yup.object({
    password: yup
        .string()
        .password()
        .minLowercase(1, 'Pelo menos 1 letra minúscula [a-z]')
        .minUppercase(1, 'Pelo menos 1 letra maiúscula [A-Z]')
        .minNumbers(1, 'Pelo menos 1 letra número [0-9]')
        .minSymbols(1, 'Pelo menos 1 caracteres especial "[@-#]"')
        .min(6)
        .required(),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'As senhas devem ser iguais!'),
});
