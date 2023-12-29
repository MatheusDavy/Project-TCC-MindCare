import { ReactNode } from 'react';
import HeadMetaTags from '../../components/Next/HeadMetaTags/HeadMetaTags.view';
import AdminView from '../../views/Admin/Admin.view';
import LayoutAdmin from '../../layouts/LayoutAdmin/LayoutAdmin.view';

const AdminPage = () => {
    return (
        <>
            <HeadMetaTags
                canonical={'teste'}
                description={'admin'}
                metaImage={''}
                title={'Admin'}
            />
            <AdminView />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
AdminPage.getLayout = (page: ReactNode) => <LayoutAdmin children={page} />;

AdminPage.guestGuard = true;

export default AdminPage;
