import { FormsComp } from '../../../components/Pages/auth/reset-password/Forms/Forms.comp';
import * as S from './ResetPassword.style';


export function ResetPasswordView () {
    return (
        <S.Section>
            <S.Container className='container'>
                <FormsComp />
            </S.Container>
        </S.Section>
    );
};
