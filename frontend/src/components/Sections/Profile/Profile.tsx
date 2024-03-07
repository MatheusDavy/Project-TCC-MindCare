import { ReactNode, useState } from 'react';
import * as S from './Profile.style';

// Icons
import { IconEdit, IconMessage, IconUserCancel, IconUserPlus } from '@tabler/icons-react';
import { useRepository } from 'src/repository';
import { useDialogActionsContext } from 'src/context/Dialog/Dialog.context';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';

type Props = {
    userName: string;
    nickname: string
    edit?: boolean;
    image: string;
    actions?: ReactNode;
    requestFriendStatus?: 'sent' | 'friend' | 'none';
    openCrop?: () => void;
};

export function Profile({
    userName,
    nickname,
    edit,
    image,
    actions,
    requestFriendStatus,
    openCrop,
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
            {requestFriendStatus && <FriendRequestActions nickname={nickname} status={requestFriendStatus} />}
            {actions}
        </S.ProfileWrapper>
    );
}

type FriendRequestActionsProps = {
    status: 'sent' | 'friend' | 'none';
    nickname: string;
}

const FriendRequestActions = ({status, nickname}: FriendRequestActionsProps) => {
    const { setData } = useDialogActionsContext();
    const [loading, setLoading] = useState(false);
    const { friendsRepository } = useRepository();

    const handleCancelFriendRequest = async () => {
        setLoading(true);
        await friendsRepository.cancelFriendRequest(nickname)
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
        setLoading(false);
    };

    return (
        <>
            {status == 'none' && (
                <S.ButtonChat href={`/chat/${nickname}`}>
                    <IconUserPlus />
                </S.ButtonChat>
            )}
            {status == 'friend' && (
                <div className='flex align-center gap-3'>
                    <S.ButtonCancelFriend onClick={() => {
                        setData({
                            message: 'Deseja realmente remover essa pessoa da sua lista de amigos?',
                            open: true,
                            action: handleCancelFriendRequest,
                            type: 'yes-or-no'
                        });
                    }}>
                        {loading ? <LoadingAnimationIcon bgColor='white' mainColor='gray' /> : <IconUserCancel />}
                    </S.ButtonCancelFriend>
                    <S.ButtonChat href={`/chat/${nickname}`}>
                        <IconMessage />
                    </S.ButtonChat>
                </div>
            )}
            {status == 'sent' && (
                <S.ButtonCancelFriend onClick={() => {
                    setData({
                        message: 'Deseja realmente desfazer o pedido de amizade?',
                        open: true,
                        action: handleCancelFriendRequest,
                        type: 'yes-or-no'
                    });
                }}>
                    {loading ? <LoadingAnimationIcon bgColor='white' mainColor='gray' /> : <IconUserCancel />}
                </S.ButtonCancelFriend>
            )}
        </>
    );
};


