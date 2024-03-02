import { LayoutDashboardProps } from './LayoutDashboard.props';

// Style
import * as S from './LayoutDashboard.style';
import { NavigateComp } from 'src/components/Layouts/Navbars/Navigation/Navigation.comp';
import { UserProvider } from 'src/context/User/User.context';
import { ChatbotComp } from 'src/components/Materials/Chat/Chatbot.comp';
import { Header } from 'src/components/Layouts/Header/Header';

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
    return (
        <UserProvider>
            <S.Main>
                <NavigateComp />
                <S.Content>
                    <Header />
                    {children}
                </S.Content>
            </S.Main>
            <ChatbotComp />
        </UserProvider>
    );
};

export default LayoutDashboard;
