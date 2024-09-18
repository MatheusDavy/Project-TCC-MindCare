/* eslint-disable react/display-name */
// Next
import { memo, useEffect, useState } from 'react';

// Styles
import * as S from './Chatbot.style';

// Logic
import { useLogic } from './Chatbot.logic';

// Chatbot
import ChatBot, { Loading } from 'react-simple-chatbot';

// Components
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

// Icons
import { Box } from '@mui/material';
import { useUserContext } from 'src/context/User/User.context';

export function ChatbotComp() {
    const { userDatas } = useUserContext();

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const steps = [
        {
            id: '1',
            message: 'Olá! Qual a sua dúvida?',
            trigger: '2',
            avatar: '/images/chatbot/chatbot-avatar.jpeg',
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            component: <Response />,
            waitAction: true,
            trigger: '4',
        },
        {
            id: '4',
            message: 'Conseguimos responder sua pergunta?',
            trigger: '5',
            avatar: '/images/chatbot/chatbot-avatar.jpeg',
        },
        {
            id: '5',
            component: <Options />,
            asMessage: true,
            avatar: '/images/chatbot/chatbot-avatar.jpeg',
        },
        {
            id: '6',
            message: 'Obrigado pela avaliação! Qual outra dúvida você tem?',
            trigger: '2',
            avatar: '/images/chatbot/chatbot-avatar.jpeg',
        },
    ];

    return (
        <S.ChatContainer>
            <S.BtnOpenChatbot aria-describedby={id} onClick={handleClick}>

            </S.BtnOpenChatbot>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <ChatBot
                    headerTitle={'Dra. Care'}
                    enableSmoothScroll={true}
                    placeholder="Pergunte algo"
                    userAvatar={userDatas?.utilsInfo?.avatar}
                    steps={steps}
                />
            </Popover>
        </S.ChatContainer>
    );
}

const Response = memo((props: any) => {
    const { methods } = useLogic();
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState<string>('');
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const { steps } = props;
        const search = steps[2].message;

        searchResponse(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const triggerNext = (step: string) => {
        props.triggerNextStep({ value: step, trigger: step });
    };

    const searchResponse = async (value: string) => {
        methods
            .handleSubmit(value)
            .then((data: any) => {
                console.log(data);
                if (data !== null && data !== undefined) {
                    setLoading(false);
                    setResult(data);
                    triggerNext('4');
                } else {
                    setHasError(true);
                    setLoading(false);
                    setResult(
                        'Ops, não consegui encontrar uma resposta para isso. Tente perguntar de outra forma ou escolha um novo tema!'
                    );
                    triggerNext('2');
                }
            })
            .catch(() => {
                setHasError(true);
                setLoading(false);
                setResult(
                    'Erro ao encontrar uma resposta, pesquise por outra resposta !'
                );
                triggerNext('2');
            });
    };

    return (
        <Typography fontSize={'0.8rem'} color={hasError ? 'red' : '#7b7b7b'}>
            {loading ? <Loading /> : result}
        </Typography>
    );
});

const Options = memo((props: any) => {
    const { methods } = useLogic();
    const [remove, setRemove] = useState<boolean>(false);
    const [userResponse, setUserReponse] = useState<'yes' | 'no' | 'none'>(
        'none'
    );

    const triggerNext = () => {
        props.triggerNextStep({ value: '6', trigger: '6' });
        setRemove(true);
    };

    const handleCreateNewQuestion = () => {
        const { steps } = props;
        const search = steps[2].message;

        methods.handleCreateNewQuestion(search);
        setUserReponse('no');
        setRemove(true);
        triggerNext();
    };

    return (
        <Box
            display={'flex'}
            gap={3}
            sx={{ pointerEvents: `${remove ? 'none' : 'auto'}` }}
        >
            <button
                style={{ display: `${userResponse === 'no' ? 'none' : 'flex'}` }}
                onClick={() => {
                    triggerNext();
                    setUserReponse('yes');
                }}
            >
        Sim
            </button>

            <button
                style={{ display: `${userResponse === 'yes' ? 'none' : 'flex'}` }}
                onClick={handleCreateNewQuestion}
            >
        Não
            </button>
        </Box>
    );
});
