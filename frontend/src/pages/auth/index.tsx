import { ReactNode } from 'react';
import HeadMetaTags from '../../components/Next/HeadMetaTags/HeadMetaTags.view';
import LayoutAuth from '../../layouts/LayoutAuth/LayoutAuth.view';
import { Structure } from 'src/components/Pages/auth/login-register';

const AuthPage = () => {
    return (
        <>
            <HeadMetaTags
                canonical={'teste'}
                description={'register'}
                metaImage={''}
                title={'register'}
            />
            <Structure />
        </>
    );
};


// eslint-disable-next-line react/no-children-prop
AuthPage.getLayout = (page: ReactNode) => <LayoutAuth children={page} />;

export default AuthPage;

