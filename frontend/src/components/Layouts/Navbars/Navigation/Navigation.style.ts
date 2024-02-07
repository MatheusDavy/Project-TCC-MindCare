import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const Navigation = tw.aside`
    fixed inset-y-0 flex flex-col
    w-full
    p-0 my-4 antialiased transition-transform duration-200
    bg-white dark:bg-slate-850
    border-0
    max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl
    xl:left-0 overflow-y-auto xl:translate-x-0 -translate-x-full
    z-50
    shadow-md
`;

export const Logo = tw(Link)`
    
`;
export const LinksWrapper = tw.div`
    mt-10
    items-center
    block grow basis-full
    w-auto max-h-screen
    h-sidenav
    overflow-auto
`;
export const Links = tw(Link)`
    text-slate-700
    py-2.7
    text-sm
    ease-nav-brand
    my-0 
    mx-2
    flex
    items-center
    whitespace-nowrap
    px-4
    transition-colors
`;
export const Category = tw.h6`
    pl-6
    ml-2
    text-xs
    font-bold
    leading-tight
    uppercase
    text-slate-700
    opacity-60
`;
