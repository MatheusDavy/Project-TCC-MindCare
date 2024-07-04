import { ReactNode } from 'react';
import { Structure} from 'src/components/Pages/dashboard/aprender/[id]/index';
import LayoutDashboard from 'src/layouts/LayoutDashboard/LayoutDashboard.view';

const LearnDescription  = () => {
    return <Structure />;
};

// eslint-disable-next-line react/no-children-prop
LearnDescription.getLayout = (page: ReactNode) => ( <LayoutDashboard children={page} />);

export default LearnDescription;
