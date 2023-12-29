import { FormsComp } from '../../../components/Pages/auth/login/Forms/Forms.comp';
import * as S from './Login.style';

export default function LoginView () {
    return (
        <S.Section>
            <S.Container className='container'>
                <FormsComp />
            </S.Container>
        </S.Section>
    );
}
