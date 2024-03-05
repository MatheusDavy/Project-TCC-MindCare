import tw from 'tailwind-styled-components';

export const Wrapper = tw.section`
    w-full h-full
    flex flex-col
    gap-3
`;

export const ProfileWrapper = tw.div`
    relative
    flex items-center justify-between
    min-w-full
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
