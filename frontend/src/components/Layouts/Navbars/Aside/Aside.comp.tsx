// React
import { useState } from 'react';

// Logic
import { useLogic } from './Aside.logic';

// Styles
import * as S from './Aside.style';

// Material UI
import Avatar from '@mui/material/Avatar';

// Types
import { UserDataTypes } from './Aside.types';

// Icons
import { IconSettings, IconLogout2 } from '@tabler/icons-react';
import { logout } from '../../../../utils/auth/logout';

export function AsideComp() {
    const { data } = useLogic();

    return (
        <S.Aside>
            <S.AsideContainer>
                <AvatarUser data={data.userData} />
                <MoodComp />
                <LinkComp />
            </S.AsideContainer>
        </S.Aside>
    );
}

const AvatarUser: React.FC<{ data: UserDataTypes | null }> = ({ data }) => {
    if (!data) {
        return null;
    }

    const { name, avatar } = data;

    const getAbbreviations = (name: string): string => {
        try {
            return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
        } catch (error) {
            return name.split(' ')[0][0];
        }
    };

    const stringAvatar = {
        sx: { bgcolor: 'gray' },
        children: getAbbreviations(name),
    };

    return (
        <S.ProfileWrapper>
            {avatar ? (
                <Avatar
                    alt={name}
                    src={avatar}
                    sx={{ width: 120, height: 120, fontSize: 40 }}
                />
            ) : (
                <Avatar {...stringAvatar} sx={{ width: 120, height: 120 }} />
            )}
            <S.ProfileName>
                {name.split(' ')[0] ?? ''} {name.split(' ')[1] ?? ''}
            </S.ProfileName>
        </S.ProfileWrapper>
    );
};

const MoodComp = () => {
    const [mood, setMood] = useState<Boolean[]>([
        false,
        false,
        false,
        false,
        false,
    ]);

    const emojis = ['😡', '😢', '😐', '🙂', '🤩'];

    const handleChoose = (index: number) => {
        setMood(() => {
            const newValues: Boolean[] = [false, false, false, false, false];
            newValues[index] = true;
            return newValues;
        });
    };

    return (
        <S.MoodWrapper>
            <S.MoodTitle>Como se sente hoje?</S.MoodTitle>
            <S.MoodContentWrapper>
                {emojis.map((data, index) => (
                    <S.MoodButton
                        key={index}
                        className={mood[index] ? 'active' : ''}
                        onClick={() => {
                            handleChoose(index);
                        }}
                    >
                        {data}
                    </S.MoodButton>
                ))}
            </S.MoodContentWrapper>
        </S.MoodWrapper>
    );
};

const LinkComp = () => {
    return (
        <S.LinksWrapper>
            <S.LinkCard href={'/client/settings'}>
                <IconSettings />
                Configurações
            </S.LinkCard>
            <S.LinkCard as={'button'} onClick={logout}>
                <IconLogout2 />
                Sair
            </S.LinkCard>
        </S.LinksWrapper>
    );
};