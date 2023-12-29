import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: 0.4s;
    }

    body{
        font-family: 'Plus Jakarta Sans', sans-serif;
        transition: 0.4s;
        padding-right: 0px !important;
        background-color: #acaec3;
        /* background-image: url('/images/background/bg_copy.png'); */
        background-size: 100%;
        background-repeat: no-repeat;
        min-height: 100vh;
    }
    textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none !important;
    
    }
    input[type=number] { 
        -moz-appearance: none;
        appearance: none;
    }

    /* Specific Settings */
    .container-main-wrapper{
        width: 95vw;
        height: 95vh;
        border-radius: 40px;
        margin: auto auto;
        overflow: hidden;
        background-color: white;
        box-shadow: 0 2px 8px -1px rgba(0, 0, 0, 0.3) !important;
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
        border: 0;
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
