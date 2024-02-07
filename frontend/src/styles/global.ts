import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none !important;
    
    }
    input[type=number] { 
        -moz-appearance: none;
        appearance: none;
    }

    /* Scroll Lenus */
    html.lenis {
        height: auto;
    }
    .lenis.lenis-smooth {
        scroll-behavior: auto;
    }
    .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
    }
    .lenis.lenis-stopped {
        overflow: hidden;
    }
    .lenis.lenis-scrolling iframe {
        pointer-events: none;
    }

    /* Reset */
    button{
        background-color: transparent;
        cursor: pointer;
        font-family: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    ul,
    li {
        margin: 0;
        padding: 0;
    }

    a{
        text-decoration: none;
    }
`;
