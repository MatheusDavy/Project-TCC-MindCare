import yup from '../../../../../utils/forms/yup';

export interface FormData {
    name: string;
    email: string;
    password: string;
}

export const defaultValues: FormData = {
    name: '',
    email: '',
    password: '',
};

export const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .password()
        .minLowercase(1, 'Pelo menos 1 letra minúscula [a-z]')
        .minUppercase(1, 'Pelo menos 1 letra maiúscula [A-Z]')
        .minNumbers(1, 'Pelo menos 1 número [0-9]')
        .minSymbols(1, 'Pelo menos 1 caractere especial [@-#]')
        .min(6)
        .required(),
});
