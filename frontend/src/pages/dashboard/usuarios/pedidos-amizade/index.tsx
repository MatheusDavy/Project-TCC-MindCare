import { ReactNode } from 'react';
import { FriendRequestTables } from 'src/components/Pages/dashboard/usuarios/FriendsRequest';
import LayoutDashboard from 'src/layouts/LayoutDashboard/LayoutDashboard.view';

const Nickname = () => {
    return <FriendRequestTables />;
};

// eslint-disable-next-line react/no-children-prop
Nickname.getLayout = (page: ReactNode) => (<LayoutDashboard children={page} />);

export default Nickname;
