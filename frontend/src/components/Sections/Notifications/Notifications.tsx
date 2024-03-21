import {
    IconBellFilled,
    IconCheck,
    IconMessageCircleHeart,
    IconX,
} from '@tabler/icons-react';
import { useState } from 'react';
import { TooltipUI } from 'src/styles/configs/tooltips/Tooltips';
import * as S from './Notifications.style';
import { Notification } from 'src/components/Materials/Messages/Notifications/Notification';
import { NotificationAction } from 'src/components/Materials/Messages/Notifications/Notification.action';

export function Notifications() {
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
}
