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
        .minLowercase(1, 'minLowercase')
        .minUppercase(1, 'minUppercase')
        .minNumbers(1, 'minNumbers')
        .minSymbols(1, 'minSymbols')
        .min(6)
        .required(),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'equalsPassword'),
});
