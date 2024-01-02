import yup from '../../../../../utils/forms/yup';

export interface FormData {
  email: string;
  password: string;
}

export const defaultValues: FormData = {
    email: '',
    password: '',
};


export const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});
