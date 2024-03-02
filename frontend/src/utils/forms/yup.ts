/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';
import YupPassword from 'yup-password';

const locale = {
    mixed: {
        required: 'Este campo precisa ser preenchido',
        notType: 'Este campo não corresponde ao tipo necessário',
        max: 'Este campo precisa ser menor ou igual a ${max}',
        min: 'Este campo precisa ser maior ou igual a ${min}'
    },
    string: {
        email: 'Insira um e-mail válido',
        max: 'Este campo precisa ser menor ou igual a ${max}',
        min: 'Este campo precisa ser maior ou igual a ${min}',
    },
    number: {
        max: 'Este campo precisa ser menor ou igual a ${max}',
        min: 'Este campo precisa ser maior ou igual a ${min}',
    }
};

yup.setLocale(locale);
YupPassword(yup);

export default yup;
