declare module 'react-simple-chatbot' {
    import * as React from 'react';

    export interface ReactSimpleChatbot {
        headerTitle: any
        enableSmoothScroll: any
        steps: any
        placeholder: string
        userAvatar?: string
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface LoadingProps {}

    let Chatbot: React.FunctionComponent<ReactSimpleChatbot>;
    export default Chatbot;

    export let Loading: React.FunctionComponent<LoadingProps>;
}
