import { useUserContext } from 'src/context/User/User.context';
import * as S from './Banner.style';
import Link from 'next/link';

export function Banner () {
    const { userDatas } = useUserContext();
    const respects = () => {
        const currentTime = new Date().getHours();
        if (currentTime >= 6 && currentTime < 12) {
            return 'Good Morning!';
        } else if (currentTime >= 12 && currentTime < 18) {
            return 'Good Afternoon!';
        } else {
            return 'Good Night!';
        }
    };

    return (
        <S.Wrapper>
            <h1 className='text-3xl text-white font-normal text-start'>
                {respects()},{' '}
                <b>{userDatas?.name}</b>
            </h1>
            <p className='text-md mt-5 font-medium text-white'>Let´s care with your mind health</p>
            <Link
                href={'/dashboard/learn'}
                className='text-sm bg-white py-4 px-10 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-[2000px] text-blue-500 font-bold mt-20'
            >
                Learn how take care my mind health
            </Link>
            <S.Image
                src={'images/illustration/mental-health/mental-health-05.png'}
                alt='Banner'
                loading='lazy'
            />
        </S.Wrapper>
    );
};
