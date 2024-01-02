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
        .minLowercase(1, 'minLowercase')
        .minUppercase(1, 'minUppercase')
        .minNumbers(1, 'minNumbers')
        .minSymbols(1, 'minSymbols')
        .min(6)
        .required(),
});
