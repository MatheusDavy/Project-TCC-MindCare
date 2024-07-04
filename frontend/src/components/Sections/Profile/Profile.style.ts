import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const ProfileWrapper = tw.div`
    relative
    flex items-center justify-between
    min-w-0 h-auto
    py-4
    pl-4
    pr-8
    break-words
    bg-white bg-clip-border
    border-0 rounded-2xl
    shadow-md
    sticky
    top-[70px]
    z-40
`;

// Avatar
export const ProfileImage = tw.div`
    relative
    inline-flex items-center justify-center
    text-white text-basse
    transition-all duration-200 ease-in-out
    w-auto h-auto
    rounded-xl
`;
export const ButtonEdit = tw.button`
    absolute
    inset-0
    w-full h-full
    flex items-center justify-center
    bg-blue-500/30 hover:bg-blue-500/60
    transition-all duration-400
    rounded-md
`;

// User Name
export const UserName = tw.h5`
    mb-1
    text-xl font-bold
    text-gray-500
`;
export const ButtonWrapper = tw.div`
    flex items-center gap-5
`;

type ButtonActionProps = {
    $type: 'cancel' | 'edit' | 'submit'
}
export const ButtonAction = tw.button<ButtonActionProps>`
    ${({ $type }) => $type === 'cancel' && 'text-white bg-red-500 hover:bg-red-500/80'}
    ${({ $type }) => $type === 'edit' && 'text-white bg-[#585ce5] hover:bg-blue-600'}
    ${({ $type }) => $type === 'submit' && 'text-white bg-[#0063f2] hover:bg-[#0063f2]/80'}
    flex items-center gap-1
    text-sm font-medium
    rounded-lg
    py-3 px-4
    focus:outline-none
    transition-all duration-200
`;
export const ButtonChat = tw(Link)`
    py-3 px-4
    rounded-md
    text-white bg-[#0063f2] hover:bg-[#0063f2]/80
    transition-all
    durantion-[600]
`;
export const ButtonRequest = tw.button`
    py-3 px-4
    rounded-md
    text-white bg-[#0063f2] hover:bg-[#0063f2]/80
    transition-all
    durantion-[600]
`;
export const ButtonCancelFriend = tw.button`
    text-white bg-red-500 hover:bg-red-500/80
`;
