import { ReactNode } from 'react';
import HeadMetaTags from '../../components/Next/HeadMetaTags/HeadMetaTags.view';
import LoginView from '../../views/auth/login-register/Login.view';
import { GetStaticPropsContext } from 'next/types';
import LayoutAuth from '../../layouts/LayoutAuth/LayoutAuth.view';

const AuthPage = () => {
    return (
        <>
            <HeadMetaTags
                canonical={'teste'}
                description={'register'}
                metaImage={''}
                title={'register'}
            />
            <LoginView />
        </>
    );
};


// eslint-disable-next-line react/no-children-prop
AuthPage.getLayout = (page: ReactNode) => <LayoutAuth children={page} />;

export default AuthPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../languages/${locale}.json`)).default,
        },
    };
}
