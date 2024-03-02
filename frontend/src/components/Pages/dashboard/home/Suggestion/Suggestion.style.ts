import tw from 'tailwind-styled-components';

export const Wrapper = tw.section`
    flex flex-col items-start
    w-full
    max-w-[350px]
    min-w-[350px]
    rounded-3xl
    p-7
    relative
    aspect-[0.9]
    overflow-hidden

    before:content-['*']
    before:absolute
    before:inset-0
    before:w-full
    before:h-full
    before:bg-blue-500
    before:z-[1]
    before:opacity-[0.6]
`;
export const Title = tw.h2`
    text-white
    text-3xl
    tracking-widest
    text-white
    mt-3
    relative
    z-[3]
`;
export const Description = tw.p`
    text-white text-[12px]
    py-2 px-5
    rounded-[100px]
    bg-white/30
    w-fit
    mt-[50%]
    backdrop-blur-sm
    relative
    z-[3]
`;
export const Action = tw.a`
    p-3
    rounded-[50%]
    absolute
    z-[3]
`;
export const Background = tw.img`
    absolute
    inset-0
    w-full h-full
    object-cover
    object-center
    z-[0]
    brightness-[0.3]
`;
