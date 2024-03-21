import { ReactNode } from 'react';
import { Structure } from 'src/components/Pages/dashboard/chat';
import LayoutDashboard from 'src/layouts/LayoutDashboard/LayoutDashboard.view';

const Chat = () => {
    return (
        <>
            <Structure />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
Chat.getLayout = (page: ReactNode) => (<LayoutDashboard children={page} />);

export default Chat;

