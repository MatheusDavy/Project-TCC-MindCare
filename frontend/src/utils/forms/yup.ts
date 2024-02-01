/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';
import YupPassword from 'yup-password';

const locale = {
    mixed: {
        default: 'default',
        required: 'required',
        notType: 'notType',
        oneOf: 'oneOf',
        max: 'max',
        min: 'min'
    },
    string: {
        email: 'email',
        max: 'max',
        min: 'min',
        length: 'length'
    },
    number: {
        length: 'length',
        max: 'max',
        min: 'min'
    }
};

yup.setLocale(locale);
YupPassword(yup);

export default yup;
