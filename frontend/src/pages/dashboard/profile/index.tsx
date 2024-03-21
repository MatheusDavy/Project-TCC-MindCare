import { ReactNode } from 'react';
import HeadMetaTags from 'src/components/Next/HeadMetaTags.view';
import LayoutDashboard from 'src/layouts/LayoutDashboard/LayoutDashboard.view';
import { Structure } from 'src/components/Pages/dashboard/profile/index';

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

