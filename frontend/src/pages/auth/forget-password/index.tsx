import { ReactNode } from 'react';
import HeadMetaTags from '../../../components/Next/HeadMetaTags/HeadMetaTags.view';
import LayoutAuth from '../../../layouts/LayoutAuth/LayoutAuth.view';
import { StructurePage } from 'src/components/Pages/auth/forget-password';

const ForgotPasswordPage = () => {
    return (
        <>
            <HeadMetaTags
                canonical={''}
                description={'Resetar Senha'}
                metaImage={''}
                title={'Resetar Senha'}
            />
            <StructurePage />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
ForgotPasswordPage.getLayout = (page: ReactNode) => <LayoutAuth children={page} />;

export default ForgotPasswordPage;

