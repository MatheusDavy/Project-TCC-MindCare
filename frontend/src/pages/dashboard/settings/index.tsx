import { ReactNode } from 'react';
import HeadMetaTags from '../../../components/Next/HeadMetaTags/HeadMetaTags.view';
import LayoutDashboard from '../../../layouts/LayoutDashboard/LayoutDashboard.view';
import { SettingsView } from 'src/views/dashboard/settings/Settings.view';
import { GetStaticPropsContext } from 'next/types';

const DashboardPage = () => {
    return (
        <>
            <HeadMetaTags
                canonical={'teste'}
                description={'Client'}
                metaImage={''}
                title={'Client'}
            />
            <SettingsView />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
DashboardPage.getLayout = (page: ReactNode) => <LayoutDashboard children={page} />;

export default DashboardPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../../languages/${locale}.json`)).default,
        },
    };
}
