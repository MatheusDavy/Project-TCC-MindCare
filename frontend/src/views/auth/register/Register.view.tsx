import { FormsComp } from '../../../components/Pages/auth/register/Forms/Forms.comp';
import * as S from './Register.style';

export default function RegisterView () {
    return (
        <S.Section>
            <S.Container className='container'>
                <FormsComp />
            </S.Container>
        </S.Section>
    );
}
