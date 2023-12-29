import HeadMetaTags from '../../../components/Next/HeadMetaTags/HeadMetaTags.view';
import { ForgotPasswordView } from '../../../views/auth/forget-password/FortgotPassword.view';

const ForgotPasswordPage = () => {
    return (
        <>
            <HeadMetaTags
                canonical={''}
                description={'Resetar Senha'}
                metaImage={''}
                title={'Resetar Senha'}
            />
            <ForgotPasswordView />
        </>
    );
};

export default ForgotPasswordPage;
