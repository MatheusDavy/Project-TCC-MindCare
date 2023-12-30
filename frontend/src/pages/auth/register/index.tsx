import { GetStaticPropsContext } from 'next/types';
import HeadMetaTags from '../../../components/Next/HeadMetaTags/HeadMetaTags.view';
import RegisterView from '../../../views/auth/register/Register.view';
import { ReactNode } from 'react';
import LayoutAuth from '../../../layouts/LayoutAuth/LayoutAuth.view';

const RegisterPage = () => {
    return (
        <>
            <HeadMetaTags
                canonical={'teste'}
                description={'register'}
                metaImage={''}
                title={'register'}
            />
            <RegisterView />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
RegisterPage.getLayout = (page: ReactNode) => <LayoutAuth children={page} />;

export default RegisterPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../../languages/${locale}.json`)).default,
        },
    };
}
