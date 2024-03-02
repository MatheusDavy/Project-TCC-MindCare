import tw from 'tailwind-styled-components';

export const Main = tw.section`
    w-full h-[-webkit-fill-available] min-h-[100vh]
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
    w-full max-h-screen
    transition-all duration-200 ease-in-out
    pr-10 pl-80
    py-4
    overflow-auto
`;
