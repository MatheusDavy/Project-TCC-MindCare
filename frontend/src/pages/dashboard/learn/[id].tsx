import { ReactNode } from 'react';
import { BlogDescription } from 'src/components/Pages/dashboard/learn/learn-description';
import LayoutDashboard from 'src/layouts/LayoutDashboard/LayoutDashboard.view';

const LearnDescription  = () => {
    return (
        <>
            <BlogDescription />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
LearnDescription.getLayout = (page: ReactNode) => ( <LayoutDashboard children={page} />);

export default LearnDescription;
