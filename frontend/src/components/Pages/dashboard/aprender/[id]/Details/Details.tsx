/* eslint-disable react-hooks/rules-of-hooks */
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';
import { IconCircleCheck, IconReload } from '@tabler/icons-react';
import { ButtonCustom } from 'src/components/Materials/Buttons/ButtonCustom';
import { useLogic } from './Details.logic';
import { TooltipUI } from 'src/styles/configs/tooltips/Tooltips';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useQuery } from 'react-query';
import { useRepository } from 'src/repository';
import { useRouter } from 'next/router';

export function Details() {
    const { data, methods } = useLogic();

    if (data.isLoading) {
        return <Loading />;
    }

    if (!data.data) {
        return <RequestContentError refetch={methods.refetch} />;
    }

    return (
        <div className='w-[70%]'>
            <iframe
                className='w-full aspect-video rounded-3xl'
                src={data.data.video.link.replace('watch?v=', 'embed/')}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
            <br />
            <div className='flex align-center justify-between flex-wrap'>
                <ActionsGroup />
                <Friends />
            </div>
            <br />
            <br />
            <h1 className='text-3xl'>
                {data.data.title}
            </h1>
            <br />
            <div
                className='flex flex-col gap-5'
                dangerouslySetInnerHTML={{ __html: data.data.content }}
            />
        </div>
    );
}

const Loading = () => {
    return (
        <LoadingAnimationIcon
            className="mx-auto mt-[30vh]"
            bgColor={'gray'}
            mainColor={'blue'}
        />
    );
};

const Friends = () => {
    const router = useRouter();
    const { learnRepository } = useRepository();

    const { data: friends, isLoading } = useQuery(
        `friends-who-watched-video-${router.query.id}`,
        async () => {
            const response = await learnRepository.getFriendsWhoWatched(router.query.id as 'string' | 'number');
            return response.data;
        }
    );

    if (isLoading) {
        return <Loading />;
    }

    if (friends.length == 0) return;

    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <p className='text-sm'>Amigos que assistiram</p>
            <AvatarGroup max={4}>
                {friends.map((friend: any) => (
                    <TooltipUI
                        key={friend.nickname}
                        title={friend.nickname}
                        placement='top'
                    >
                        <Avatar alt={friend.nickname} src={friend.utilsInfo.avatar} />
                    </TooltipUI>
                ))}
            </AvatarGroup>
        </div>
    );
};

const RequestContentError = ({ refetch }) => {
    return (
        <div className="flex flex-col text-center justify-center align-center h-full w-full mt-[10vh]">
            <h1 className="text-2xl font-bold text-gray-900">Não foi possivel carregar este conteúdo</h1>
            <button className="mt-8 w-fit flex align-center gap-2 text-blue-400 mx-auto" onClick={refetch}>
                <IconReload size={'20px'} />
                Recarregar
            </button>
        </div>
    );
};

const ActionsGroup = () => {
    const router = useRouter();
    const { learnRepository } = useRepository();
    const { data: isWacthed, isLoading: isLoadingIsWacthed, refetch: refetchIsWacthed } = useQuery(
        `watched-video-${router.query.id}`,
        async () => {
            const response = await learnRepository.verifyVideoWasWacthed(router.query.id as 'string');
            return response.data;
        }
    );

    // Functions
    const markAsStudied = async () => {
        await learnRepository
            .markVideoAsWacthed(router.query.id as 'string')
            .then(() => {
                refetchIsWacthed();
            });
    };

    const markOffAsStudied = async () => {
        await learnRepository
            .markOffVideoAsWacthed(router.query.id as 'string' | 'number')
            .then(() => {
                refetchIsWacthed();
            });
    };

    if (isLoadingIsWacthed) return;

    return (
        <ButtonCustom
            theme={!!isWacthed ? 'RED' : 'BLUE'}
            onClick={!!isWacthed ? markOffAsStudied : markAsStudied}
            loading={isLoadingIsWacthed}
        >
            {!!isWacthed ? 'Desmarcar como estudado' : 'Marcar como estudado'}
            <IconCircleCheck />
        </ButtonCustom>
    );
};
