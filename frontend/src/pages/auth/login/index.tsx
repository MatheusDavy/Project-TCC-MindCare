import { ReactNode } from 'react';
import HeadMetaTags from '../../../components/Next/HeadMetaTags/HeadMetaTags.view';
import LoginView from '../../../views/auth/login/Login.view';
import { GetStaticPropsContext } from 'next/types';
import LayoutAuth from '../../../layouts/LayoutAuth/LayoutAuth.view';

const LoginPage = () => {
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
LoginPage.getLayout = (page: ReactNode) => <LayoutAuth children={page} />;

export default LoginPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../../languages/${locale}.json`)).default,
        },
    };
}
