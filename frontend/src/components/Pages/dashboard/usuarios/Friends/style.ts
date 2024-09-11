import tw from 'tailwind-styled-components';

// User Name
export const UserName = tw.h5`
    mb-1
    text-xl font-bold
    text-gray-500
`;

type ButtonActionProps = {
    $type: 'cancel' | 'edit' | 'submit'
}
export const ButtonAction = tw.button<ButtonActionProps>`
    ${({ $type }) => $type === 'cancel' && 'text-white bg-red-500 hover:bg-red-500/80'}
    ${({ $type }) => $type === 'edit' && 'text-white bg-[#585ce5] hover:bg-blue-600'}
    ${({ $type }) => $type === 'submit' && 'text-white bg-[#0063f2] hover:bg-[#0063f2]/80'}
    flex items-center justify-center gap-1
    text-sm font-medium
    w-full
    rounded-lg
    py-3 px-4
    focus:outline-none
    transition-all duration-200
`;
