import yup from '../../../../../utils/forms/yup';

export interface FormData {
  email: string;
}

export const defaultValues: FormData = {
    email: '',
};


export const schema = yup.object().shape({
    email: yup.string().email().required(),
});
