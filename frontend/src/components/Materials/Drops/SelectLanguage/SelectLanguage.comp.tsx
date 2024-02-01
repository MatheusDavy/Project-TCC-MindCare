// Next
import Image from 'next/image';

// Logic
import { useLogic } from './SelectLanguage.logic';
import Cookies from 'js-cookie';

// Style
import * as S from './SelectLanguage.style';

// Icons
import {IconCheck} from '@tabler/icons-react';
import { SelectChangeEvent } from '@mui/material';

export function SelectLanguageComp() {
    const { data, methods } = useLogic();

    return (
        <S.SelectWrapper
            value={data.language}
            onChange={(event: SelectChangeEvent) => {
                const data = event.target.value;
                Cookies.set('MindCareLang', String(data));
                methods.handleChange(data);
            }}
            renderValue={value => {
                const language = data.selectLanguageDatas.find(
                    lang => lang.code === value
                );
                return (
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <Image
                            src={language?.flag!}
                            alt={language?.language!}
                            width={20}
                            height={20}
                        />
                    </p>
                );
            }}
        >
            {data.selectLanguageDatas.map(lang => (
                <S.SelectItem key={lang.language} value={lang.code}
                    style={{ display: 'flex', alignItems: 'center', gap: '5px'}}
                >
                    <Image
                        src={lang?.flag}
                        alt={lang?.language}
                        width={20}
                        height={20}
                    />
                    {lang.language}
                    {data.language === lang.code && (
                        <IconCheck className='icon-check' width={15} height={15}/>
                    )}
                </S.SelectItem>
            ))}
        </S.SelectWrapper>
    );
}
