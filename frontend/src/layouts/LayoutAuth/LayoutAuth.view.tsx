import { SelectLanguageComp } from '../../components/Materials/Drops/SelectLanguage/SelectLanguage.comp';
import { LayoutAuthProps } from './LayoutAuth.props';

const LayoutAuth = ({ children }: LayoutAuthProps) => {
    return (
        <main>
            <div style={{ position: 'absolute', top: '5vh', right: '5vh' }}>
                <SelectLanguageComp />
            </div>
            {children}
        </main>
    );
};

export default LayoutAuth;
