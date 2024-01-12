// Style
import { useRouter } from 'next/router';
import { dataNavs } from './Navigation.data';
import * as S from './Navigation.style';
import Image from 'next/image';
import { Tooltips } from 'src/styles/configs/ui/tooltips/Tooltips';

export function NavigateComp() {
    const router = useRouter();

    return (
        <S.Navigation>
            <S.Logo href={'/dashboard/'}>
                <Image src={''} width={50} height={50} alt="Mind Care" />
            </S.Logo>

            <S.LinksWrapper>
                {dataNavs.map(data => (
                    <Tooltips
                        key={data.href}
                        title={data.title}
                        placement="right"
                    >
                        <S.Links
                            href={data.href}
                            aria-label={data.href}
                            className={
                                router.pathname == data.href ? 'active' : ''
                            }
                        >
                            {data.icon}
                        </S.Links>
                    </Tooltips>
                ))}
            </S.LinksWrapper>
        </S.Navigation>
    );
}
