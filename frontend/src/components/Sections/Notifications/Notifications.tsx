import {
    IconBellFilled,
    IconMessageCircleHeart,
} from '@tabler/icons-react';
import { useState } from 'react';
import { TooltipUI } from 'src/styles/configs/tooltips/Tooltips';
import * as S from './Notifications.style';
import { Notification } from 'src/components/Materials/Messages/Notifications/Notification';
import { useLogic } from './Notifications.logic';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';

export function Notifications() {
    const { data } = useLogic();
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
                className={`${open ? 'z-50' : 'z-[-1] hidden'}`}
                style={{ transform: 'translateY(calc(20px + 100%)' }}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
            >
                <p className="flex items-center p-3 font-bold">
                    Notificações
                </p>
                {data.loadingNotifications && <LoadingAnimationIcon className="mx-auto mt-[30vh]" bgColor={'gray'} mainColor={'blue'} />}
                {(data.notifications) && data.notifications.map((data, index) => (
                    <Notification.Root key={index}>
                        <Notification.Icon
                            icon={IconMessageCircleHeart}
                            image={data.avatar}
                        />
                        <Notification.Messages
                            title={data.title}
                            message={data.description}
                        />
                    </Notification.Root>
                ))}
            </S.NotificationDropdown>
        </div>
    );
}
