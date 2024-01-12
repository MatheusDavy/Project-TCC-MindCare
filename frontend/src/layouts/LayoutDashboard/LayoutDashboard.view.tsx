import { LayoutDashboardProps } from './LayoutDashboard.props';

// Context / Providers
import { AsideComp } from '../../components/Layouts/Navbars/Aside/Aside.comp';

// Style
import * as S from './LayoutDashboard.style';
import { NavigateComp } from 'src/components/Layouts/Navbars/Navigation/Navigation.comp';
import { UserProvider } from 'src/context/User/User.context';

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
    return (
        <UserProvider>
            <S.Main>
                <NavigateComp />
                {children}
                <AsideComp />
            </S.Main>
        </UserProvider>
    );
};

export default LayoutDashboard;
