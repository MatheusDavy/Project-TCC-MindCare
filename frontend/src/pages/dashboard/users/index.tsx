import { ReactNode } from 'react';
import { Structure } from 'src/components/Pages/dashboard/users';
import LayoutDashboard from 'src/layouts/LayoutDashboard/LayoutDashboard.view';

const Nickname = () => {
    return (
        <>
            <Structure />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
Nickname.getLayout = (page: ReactNode) => (<LayoutDashboard children={page} />);

export default Nickname;

