import tw from 'tailwind-styled-components';

export const Main = tw.section`
    w-full h-[100vh] overflow-auto
    flex
    flex-col
    bg-[#f6f6f6]
    relative
    items-start
    justify-start
`;

export const Content = tw.main`
    relative
    flex flex-col
    h-full
    w-full
    transition-all duration-200 ease-in-out
    pr-10 xl:pl-80 md:pl-10
    py-4
    overflow-auto
`;
