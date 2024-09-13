import yup from '../../../../../utils/forms/yup';

export const schema = yup.object().shape({
    name: yup.string().required(),
    nickname: yup.string().min(5).required(),
    email: yup
        .string()
        .email()
        .required(),
    utilsInfo: yup.object().shape({
        age: yup
            .number()
            .nullable()
            .max(140, 'ageInvalid')
            .transform((_, val) => !Number.isNaN(Number(val)) && val !== '' ? Number(val) : null ),
        document: yup
            .string()
            .length(11, 'lenghtDocument')
            .nullable()
            .transform((_, val) => !Number.isNaN(Number(val)) && val !== '' ? val : null ),
        city: yup.string().notRequired(),
        state: yup.string().notRequired(),
        cep: yup
            .number()
            .nullable()
            .transform((_, val) => !Number.isNaN(Number(val)) && val !== '' ? Number(val) : null),
        avatar: yup.string().notRequired(),
    }),
});
