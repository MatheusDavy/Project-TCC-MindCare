import tw from 'tailwind-styled-components';

export const Wrapper = tw.section`
    w-full
    h-auto
    py-20
    px-10
    rounded-2xl
    bg-[#0063f2]
    flex
    flex-col
    justify-start
    items-start
    shadow-md
    relative
`;

export const Image = tw.img`
    absolute
    right-[10%]
    bottom-[10%]
    h-[96%]
    w-auto
    scale-x-[-1]
`;
