import tw from 'tailwind-styled-components';

export const ProfileWrapper = tw.div`
    relative
    flex items-center justify-between
    min-w-0
    py-4
    pl-4
    pr-8
    overflow-hidden break-words
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
    ${({ $type }) => $type === 'cancel' && 'text-red-500 bg-red-100 border-[1px] border-red-500'}
    ${({ $type }) => $type === 'edit' && 'text-white bg-purple-700 hover:bg-purple-800'}
    ${({ $type }) => $type === 'submit' && 'text-gray-500 bg-gray-100 border-[1px] border-gray-500 hover:border-green-500 hover:text-green-500'}
    flex items-center gap-1
    text-sm font-medium
    rounded-lg
    py-3 px-4
    focus:outline-none
    transition-all duration-200
`;

