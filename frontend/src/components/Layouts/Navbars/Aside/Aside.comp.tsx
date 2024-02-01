// React
import { useState } from 'react';

// Logic
import { useLogic } from './Aside.logic';

// Styles
import * as S from './Aside.style';

// Types

// Icons
import { IconSettings, IconLogout2 } from '@tabler/icons-react';
import { logout } from '../../../../utils/auth/logout';
import { AvatarUser } from 'src/components/Materials/Profiles/user-profile/profile.comp';

export function AsideComp() {
    const { data } = useLogic();

    return (
        <S.Aside>
            <S.AsideContainer>
                {!data.loadingUserDatas && data.userDatas && (
                    <S.ProfileWrapper>
                        <AvatarUser
                            photo={data.userDatas.utilsInfo?.avatar}
                            name={data.userDatas.name}
                        />
                        <S.ProfileName>
                            {data.userDatas.name!.split(' ')[0] ?? ''}{' '}
                            {data.userDatas.name!.split(' ')[1] ?? ''}
                        </S.ProfileName>
                    </S.ProfileWrapper>
                )}
                <MoodComp />
                <LinkComp />
            </S.AsideContainer>
        </S.Aside>
    );
}

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
            <S.LinkCard href={'/dashboard/settings'}>
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
