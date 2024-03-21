import tw from 'tailwind-styled-components';

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
