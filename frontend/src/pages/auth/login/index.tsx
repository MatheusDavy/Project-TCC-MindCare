import HeadMetaTags from '../../../components/Next/HeadMetaTags/HeadMetaTags.view';
import LoginView from '../../../views/auth/login/Login.view';

const LoginPage = () => {

    return (
        <>
            <HeadMetaTags
                canonical={'teste'}
                description={'register'}
                metaImage={''}
                title={'register'}
            />
            <LoginView />
        </>
    );
};

export default LoginPage;
