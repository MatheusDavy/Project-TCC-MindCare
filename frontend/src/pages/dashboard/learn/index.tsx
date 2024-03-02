import { ReactNode } from 'react';
import LayoutDashboard from 'src/layouts/LayoutDashboard/LayoutDashboard.view';
import { Structure } from 'src/components/Pages/dashboard/learn/page/index';

const DashboardPage = () => {
    return (
        <>
            <Structure />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
DashboardPage.getLayout = (page: ReactNode) => ( <LayoutDashboard children={page} />);

export default DashboardPage;

