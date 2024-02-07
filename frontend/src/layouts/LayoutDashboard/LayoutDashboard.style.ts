import tw from 'tailwind-styled-components';

export const Main = tw.section`
    w-full h-[-webkit-fill-available]
    flex
    flex-col
    bg-gray-100
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
    pl-80 pr-10
    py-4
    overflow-auto
`;

type DetailBgProps = {
    $page: string
}
export const DetailBg = tw.div<DetailBgProps>`
    bg-purple-600 bg-cover bg-center
    absolute
    w-full
    h-[30vh]
    inset-0
`;
