import { ReactNode } from 'react';
import * as S from './Profile.style';

// Icons
import { IconEdit } from '@tabler/icons-react';

type Props = {
    userName: string;
    nickname: string
    edit?: boolean;
    image: string;
    actions?: ReactNode;
    openCrop?: () => void;
};

export function Profile({
    userName,
    nickname,
    edit,
    image,
    openCrop,
    actions
}: Props) {
    return (
        <S.ProfileWrapper>
            <div className="flex items-center gap-10">
                <S.ProfileImage>
                    <img
                        src={image}
                        alt="User Profile"
                        width={19}
                        height={19}
                        className="w-full aspect-square object-cover h-[100px] w-[100px]  shadow-2xl rounded-xl"
                    />
                    {edit && (
                        <S.ButtonEdit onClick={openCrop}>
                            <IconEdit
                                width={35}
                                height={35}
                                className="text-white"
                            />
                        </S.ButtonEdit>
                    )}
                </S.ProfileImage>
                <div className='flex flex-col gap-2'>
                    <S.UserName>{userName}</S.UserName>
                    <span className='text-gray-900/60'>{nickname}</span>
                </div>
            </div>
            {actions}
        </S.ProfileWrapper>
    );
}
