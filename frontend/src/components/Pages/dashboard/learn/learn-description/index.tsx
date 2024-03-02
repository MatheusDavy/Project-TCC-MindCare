/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';
import { IconReload } from '@tabler/icons-react';

export function BlogDescription() {
    const router = useRouter();
    const { data, isLoading, refetch } = useQuery(`content-description-${router.query.id}`, async () => {
        const filtered = await axios.get('/datas/learn.json')
            .then(async ({ data }) => {
                console.log(router.query.id);
                return data.filter(content => content.id == router.query.id);
            })
            .catch(err => err);
        return filtered[0];
    });

    if (isLoading) return <LoadingAnimationIcon className="mx-auto mt-[30vh]" bgColor={'gray'} mainColor={'blue'} />;

    if (!data) return (
        <div className="flex flex-col text-center justify-center align-center h-full w-full mt-[10vh]">
            <h1 className="text-2xl font-bold text-gray-900">Não foi possivel carregar este conteúdo</h1>
            <button className="mt-8 w-fit flex align-center gap-2 text-blue-400 mx-auto" onClick={() => refetch()}>
                <IconReload size={'20px'} />
                Recarregar
            </button>
        </div>
    );

    return (
        <div className='w-[70%]'>
            <iframe
                className='w-full aspect-video rounded-3xl'
                src={data.video.link.replace('watch?v=', 'embed/')}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
            <br />
            <h1 className='text-3xl'>
                {data.title}
            </h1>
            <br />
            <div
                className='flex flex-col gap-5'
                dangerouslySetInnerHTML={{ __html: data.content }}
            />
        </div>
    );
}
