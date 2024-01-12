import { User } from 'src/types/users/usert.types';
import yup from '../../../../../utils/forms/yup';

export const defaultValues: User = {
    name: '',
    email: '',
    utilsInfo:{
        age: undefined,
        cep: undefined,
        document: undefined,
        city: '',
        state: ''
    }
};

export const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup
        .string()
        .email()
        .required(),
    age: yup.number(),
    document: yup.string(),
    city: yup.string(),
    state: yup.string(),
    cep: yup.number()
});
