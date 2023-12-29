import HeadMetaTags from '../../../components/Next/HeadMetaTags/HeadMetaTags.view';
import RegisterView from '../../../views/auth/register/Register.view';

export default function RegisterPage () {
    return (
        <>
            <HeadMetaTags
                canonical={'teste'}
                description={'register'}
                metaImage={''}
                title={'register'}
            />
            <RegisterView />
        </>
    );
}
