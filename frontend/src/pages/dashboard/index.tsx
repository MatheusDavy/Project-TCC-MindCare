import { ReactNode } from 'react';
import HeadMetaTags from '../../components/Next/HeadMetaTags/HeadMetaTags.view';
import ClientView from '../../views/dashboard/Dashboard';
import LayoutDashboard from '../../layouts/LayoutDashboard/LayoutDashboard.view';

const DashboardPage = () => {
    return (
        <>
            <HeadMetaTags
                canonical={'teste'}
                description={'Client'}
                metaImage={''}
                title={'Client'}
            />
            <ClientView />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
DashboardPage.getLayout = (page: ReactNode) => <LayoutDashboard children={page} />;

export default DashboardPage;
