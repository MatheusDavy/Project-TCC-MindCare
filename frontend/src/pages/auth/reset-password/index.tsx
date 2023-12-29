import HeadMetaTags from '../../../components/Next/HeadMetaTags/HeadMetaTags.view';
import { ResetPasswordView } from '../../../views/auth/reset-password/ResetPassword.view';

const ResetPasswordPage = () => {
    return (
        <>
            <HeadMetaTags
                canonical={''}
                description={'Resetar Senha'}
                metaImage={''}
                title={'Resetar Senha'}
            />
            <ResetPasswordView />
        </>
    );
};

export default ResetPasswordPage;
