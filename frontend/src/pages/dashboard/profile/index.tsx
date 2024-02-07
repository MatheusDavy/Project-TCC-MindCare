import { ReactNode } from 'react';
import HeadMetaTags from 'src/components/Next/HeadMetaTags/HeadMetaTags.view';
import LayoutDashboard from 'src/layouts/LayoutDashboard/LayoutDashboard.view';
import { Structure } from 'src/components/Pages/dashboard/profile/index';
import { GetStaticPropsContext } from 'next';

const DashboardPage = () => {
    return (
        <>
            <HeadMetaTags
                canonical={'teste'}
                description={'Client'}
                metaImage={''}
                title={'Client'}
            />
            <Structure />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
DashboardPage.getLayout = (page: ReactNode) => ( <LayoutDashboard children={page} />);

export default DashboardPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../../languages/${locale}.json`)).default,
        },
    };
};
