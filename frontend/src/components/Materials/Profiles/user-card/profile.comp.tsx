import { useRouter } from 'next/router';
import { AvatarUser } from '../user-profile/profile.comp';
import * as S from './profile.style';

type Props = {
    name: string
    nickname: string
    avatar: string
}

export function ProfileCard ({ name, nickname, avatar }: Props){
    const router = useRouter();

    return (
        <S.Wrapper onClick={() =>  router.push(`/dashboard/users?search=${nickname}`)}>
            <AvatarUser size={50} name={name} photo={avatar} />
            <div className='flex flex-col justify-start'>
                <p className='text-start text-gray-900 font-bold'>{name}</p>
                <span className='text-start text-gray-900/70 text-sm'>{nickname}</span>
            </div>
        </S.Wrapper>
    );
};
