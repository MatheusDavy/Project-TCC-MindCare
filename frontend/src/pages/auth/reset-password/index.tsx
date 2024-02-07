import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HeadMetaTags from '../../../components/Next/HeadMetaTags/HeadMetaTags.view';
import { LoadingContentComp } from '../../../components/Materials/Loaders/LoadingContent/LoadingContent.comp';
import LayoutAuth from '../../../layouts/LayoutAuth/LayoutAuth.view';
import { GetStaticPropsContext } from 'next/types';
import { StructurePage } from 'src/components/Pages/auth/reset-password';

const ResetPasswordPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = new URLSearchParams(window.location.search).get(
            'userId'
        );
        if (!userId) {
            router.push('/auth/login');
        } else {
            setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <HeadMetaTags
                canonical={''}
                description={'Resetar Senha'}
                metaImage={''}
                title={'Resetar Senha'}
            />
            {!loading && <StructurePage />}
            {loading && <LoadingContentComp />}
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
ResetPasswordPage.getLayout = (page: ReactNode) => <LayoutAuth children={page} />;

export default ResetPasswordPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../../languages/${locale}.json`)).default,
        },
    };
};
