import { ReactNode } from 'react';
import { FriendTables } from 'src/components/Pages/dashboard/usuarios/Friends';
import LayoutDashboard from 'src/layouts/LayoutDashboard/LayoutDashboard.view';


const Nickname = () => {
    return <FriendTables />;
};

// eslint-disable-next-line react/no-children-prop
Nickname.getLayout = (page: ReactNode) => (<LayoutDashboard children={page} />);

export default Nickname;
