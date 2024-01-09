import { LayoutDashboardProps } from './LayoutDashboard.props';

// Context / Providers
import { AsideComp } from '../../components/Layouts/Navbars/Aside/Aside.comp';

// Style
import * as S from './LayoutDashboard.style';

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
    return (
        <S.Main>
            {children}
            <AsideComp />
        </S.Main>
    );
};

export default LayoutDashboard;
