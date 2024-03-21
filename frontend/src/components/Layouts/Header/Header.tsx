import Link from 'next/link';
import * as S from './Header.style';
import { useRouter } from 'next/router';
import {
    IconLogout,
} from '@tabler/icons-react';
import { logout } from 'src/utils/auth/logout';
import { TooltipUI } from 'src/styles/configs/tooltips/Tooltips';
import { useUserContext } from 'src/context/User/User.context';
import Image from 'next/image';
import { Notifications } from 'src/components/Sections/Notifications/Notifications';

export function Header() {
    return (
        <S.Header>
            <Breadcrumb />
            <Navigation />
        </S.Header>
    );
}

const Breadcrumb = () => {
    const router = useRouter();

    const getCurrentPage = (): string | null => {
        var array = router.pathname.split('/');
        var removeIndex = array.indexOf('dashboard');
        if (removeIndex !== -1 && removeIndex < array.length - 1) {
            return array[removeIndex + 1];
        }
        return null;
    };

    const currentRouter: string | null = getCurrentPage();

    return (
        <S.Breadcrumb>
            <Link href={'/dashboard'} className="text-sm text-gray-900 opacity-80">
                Dashboard
            </Link>
            {currentRouter && (
                <>
                    <span className="text-sm text-gray-900">/</span>
                    <Link href={router.pathname.replace('[id]', '')} className="text-sm text-gray-900 font-bold capitalize">
                        {currentRouter}
                    </Link>
                    {router.query.id && (
                        <>
                            <span className="text-sm text-gray-900">/</span>
                            <span className="text-sm text-gray-900 font-bold capitalize">
                                {router.query.id}
                            </span>
                        </>
                    )}
                </>
            )}
        </S.Breadcrumb>
    );
};

const Navigation = () => {
    return (
        <S.Navigation>
            <Notifications />
            <TooltipUI title={'sair'} placement="bottom" arrow>
                <button id='logout' className="text-gray-900 bg-white p-4 rounded-[50%] hover:text-[#0063f2]" onClick={logout}>
                    <IconLogout width={20} height={20} />
                </button>
            </TooltipUI>
            <Profile />
        </S.Navigation>
    );
};

const Profile = () => {
    const { userDatas } = useUserContext();

    return (
        <>
            {userDatas?.utilsInfo?.avatar && (
                <Link href={'/dashboard/profile'}>
                    <Image
                        src={userDatas?.utilsInfo?.avatar}
                        alt="User"
                        width={52}
                        height={52}
                        className='rounded-[50%]'
                    />
                </Link>
            )}
        </>
    );
};
