// Style
import { SelectLanguageComp } from 'src/components/Materials/Drops/SelectLanguage/SelectLanguage.comp';
import * as S from './Navigation.style';

// Icons
import {
    IconLayoutCollage,
    IconUserFilled,
    IconSettings,
    IconBrain,
    IconHeart,
    IconBook,
} from '@tabler/icons-react';

export function NavigateComp() {
    const Navigation = [
        {
            router: 'Dashboard',
            url: '/dashboard',
            icon: (
                <IconLayoutCollage
                    width={20}
                    height={20}
                    className="text-blue-500"
                />
            ),
        },
        {
            router: 'Notice',
            url: '/dashboard',
            icon: <IconBook width={20} height={20} className="text-blue-500" />,
        },
        {
            router: 'Videos',
            url: '/dashboard',
            icon: (
                <IconHeart width={20} height={20} className="text-blue-500" />
            ),
        },
        {
            router: 'Pratice',
            url: '/dashboard',
            icon: (
                <IconBrain width={20} height={20} className="text-blue-500" />
            ),
        },
    ];

    const accountNavigaions = [
        {
            router: 'Profile',
            url: '/dashboard/profile',
            icon: (
                <IconUserFilled
                    width={20}
                    height={20}
                    className="text-slate-800"
                />
            ),
        },
        {
            router: 'Settings',
            url: '/dashboard/settings',
            icon: (
                <IconSettings
                    width={20}
                    height={20}
                    className="text-slate-800"
                />
            ),
        },
    ];

    return (
        <S.Navigation aria-expanded="false">
            <div className="h-[70px] flex items-center justify-center">
                <h1 className="text-center h-19">LOGO</h1>
            </div>

            <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

            <S.LinksWrapper>
                <ul className="flex flex-col pl-0 mb-0">
                    {Navigation.map(data => (
                        <li className="mt-0.5 w-full" key={data.url}>
                            <S.Links href={data.url}>
                                <div className="mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    {data.icon}
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                                    {data.router}
                                </span>
                            </S.Links>
                        </li>
                    ))}

                    <li className="w-full mt-10 mb-3">
                        <S.Category>Account pages</S.Category>
                    </li>

                    {accountNavigaions.map(data => (
                        <li className="mt-0.5 w-full" key={data.router}>
                            <S.Links href={data.url}>
                                <div className="mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    {data.icon}
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                                    {data.router}
                                </span>
                            </S.Links>
                        </li>
                    ))}
                </ul>
            </S.LinksWrapper>

            <div className='mt-10 pb-4 pl-7 grow flex items-end'>
                <SelectLanguageComp />
            </div>
        </S.Navigation>
    );
}
