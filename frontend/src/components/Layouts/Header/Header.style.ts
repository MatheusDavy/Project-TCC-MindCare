import tw from 'tailwind-styled-components';

export const Header = tw.header`
    w-full
    h-auto
    flex
    justify-between
    items-center
    gap-10
    p-4
    z-50
`;

export const Breadcrumb = tw.div`
    flex
    items-center
    gap-1
`;

export const Navigation = tw.div`
    flex
    items-center
    gap-4
`;

export const NotificationDropdown = tw.div`
    absolute right-0 bottom-0 z-10
    mt-2
    w-80
    max-h-[400px]
    overflow-auto
    h-auto
    origin-top-right
    rounded-md bg-white
    shadow-lg
    ring-1
    ring-black
    ring-opacity-5
    focus:outline-none
    transition-all
    duration-200
`;


