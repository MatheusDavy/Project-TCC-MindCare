import { ReactNode } from 'react';
import { Structure } from 'src/components/Pages/dashboard/videos/video-description';
import LayoutDashboard from 'src/layouts/LayoutDashboard/LayoutDashboard.view';

const VideoDescription  = () => {
    return (
        <>
            <Structure />
        </>
    );
};

// eslint-disable-next-line react/no-children-prop
VideoDescription.getLayout = (page: ReactNode) => ( <LayoutDashboard children={page} />);

export default VideoDescription;
