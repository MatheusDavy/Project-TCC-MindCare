import { ReactNode } from 'react';
import HeadMetaTags from '../../components/Next/HeadMetaTags/HeadMetaTags.view';
import LayoutDashboard from '../../layouts/LayoutDashboard/LayoutDashboard.view';
import { Structure } from 'src/components/Pages/dashboard/home';

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
DashboardPage.getLayout = (page: ReactNode) => <LayoutDashboard children={page} />;

export default DashboardPage;

