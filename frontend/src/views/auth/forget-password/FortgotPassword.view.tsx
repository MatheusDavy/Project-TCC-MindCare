import { FormsComp } from '../../../components/Pages/auth/forget-password/Forms/Forms.comp';
import * as S from './ForgotPassword.style';


export function ForgotPasswordView () {
    return (
        <S.Section>
            <S.Container className='container'>
                <FormsComp />
            </S.Container>
        </S.Section>
    );
};
