// Style
import * as S from './Navigation.style';

// Icons
import {
    IconUserFilled,
    IconBrain,
    IconFriends
} from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { TooltipUI   } from 'src/styles/configs/tooltips/Tooltips';
import Image from 'next/image';

export function NavigateComp() {
    const { pathname } = useRouter();

    const Navigation = [
        {
            tooltip: 'Learning',
            url: '/dashboard/aprender',
            icon: <IconBrain width={25} height={25}  />
        },
        {
            tooltip: 'Perfil',
            url: '/dashboard/perfil',
            icon: <IconUserFilled width={25} height={25}/>
        },
        {
            tooltip: 'Usuários',
            url: '/dashboard/usuarios',
            icon: <IconFriends width={25} height={25}/>
        },
    ];

    return (
        <S.Navigation aria-expanded="false">
            <div className="h-[70px] flex items-center justify-center">
                <Image
                    src={'/images/mind-care-brand.png'}
                    width={70}
                    height={70}
                    alt='Mind Care'
                />
            </div>

            <S.LinksWrapper>
                <ul className="flex flex-col gap-5 pl-0 mb-0">
                    {Navigation.map(data => (
                        <li className={`${pathname === data.url ? 'bg-[#0063f2] text-white rounded-[50%]' : 'text-gray-900'} w-fit h-fit p-4`} key={data.url}>
                            <TooltipUI   title={data.tooltip} arrow placement='right'>
                                <S.Links href={data.url}>
                                    {data.icon}
                                </S.Links>
                            </TooltipUI >
                        </li>
                    ))}
                </ul>
            </S.LinksWrapper>
        </S.Navigation>
    );
}
