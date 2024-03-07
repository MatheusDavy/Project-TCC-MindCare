import { useState } from 'react';
import Link from 'next/link';
import * as S from './Header.style';
import { useRouter } from 'next/router';
import {
    IconBellFilled,
    IconLogout,
    IconMessageCircleHeart,
    IconX,
    IconCheck
} from '@tabler/icons-react';
import { logout } from 'src/utils/auth/logout';
import { TooltipUI } from 'src/styles/configs/tooltips/Tooltips';
import { Notification } from 'src/components/Materials/Messages/Notifications/Notification';
import { NotificationAction } from 'src/components/Materials/Messages/Notifications/Notification.action';
import { useUserContext } from 'src/context/User/User.context';
import Image from 'next/image';

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
            <NotificationWrapper />
            <TooltipUI title={'sair'} placement="bottom" arrow>
                <button id='logout' className="text-gray-900 bg-white p-4 rounded-[50%] hover:text-[#0063f2]" onClick={logout}>
                    <IconLogout width={20} height={20} />
                </button>
            </TooltipUI>
            <Profile />
        </S.Navigation>
    );
};

const NotificationWrapper = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [tooltip, setTooltip] = useState(false);

    return (
        <div className="relative flex item-center justify-center text-left z-50">
            <TooltipUI
                title="Notificação"
                open={tooltip}
                placement="bottom"
                arrow
            >
                <button
                    className="text-gray-900 bg-white p-4 rounded-[50%] hover:text-[#0063f2]"
                    onClick={() => {
                        setOpen(prev => !prev);
                    }}
                    onMouseEnter={() => {
                        !open ? setTooltip(true) : setTooltip(false);
                        console.log(open);
                    }}
                    onMouseLeave={() => {
                        setTooltip(false);
                    }}
                >
                    <IconBellFilled hanging={''} width={20} height={20} />
                </button>
            </TooltipUI>

            <S.NotificationDropdown
                className={`${open
                    ? 'z-50'
                    : 'z-[-1] hidden'
                }`}
                style={{ transform: 'translateY(calc(20px + 100%)' }}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
            >
                <Notification.Root>
                    <Notification.Icon
                        icon={IconMessageCircleHeart}
                        image={
                            'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY='
                        }
                    />
                    <Notification.Messages
                        title="Nova Mensagem"
                        message="Hey, davys. How are ..."
                        description="one minute ago"
                    />
                </Notification.Root>

                <Notification.Root>
                    <Notification.Icon
                        icon={IconMessageCircleHeart}
                        image={
                            'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY='
                        }
                    />
                    <Notification.Messages
                        title="Nova Mensagem"
                        message="Hey, davys. How are ..."
                        description="one minute ago"
                    />
                </Notification.Root>

                <Notification.Root>
                    <Notification.Icon
                        icon={IconMessageCircleHeart}
                        image={
                            'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY='
                        }
                    />
                    <div>
                        <Notification.Messages
                            title="Pedido de Amizade"
                            message="Robert gostaria de ser seu amigo"
                        />
                        <Notification.Actions>
                            <NotificationAction icon={IconX} />
                            <NotificationAction icon={IconCheck} />
                        </Notification.Actions>
                    </div>
                </Notification.Root>
            </S.NotificationDropdown>
        </div>
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
