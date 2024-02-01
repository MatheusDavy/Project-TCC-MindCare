import { SelectLanguageComp } from '../../components/Materials/Drops/SelectLanguage/SelectLanguage.comp';
import { LayoutAuthProps } from './LayoutAuth.props';

const LayoutAuth = ({ children }: LayoutAuthProps) => {
    return (
        <main>
            <div className='absolute top-[15px] right-[15px] lg:right-[5vw] lg:top-[5vw]'>
                <SelectLanguageComp />
            </div>
            {children}
        </main>
    );
};

export default LayoutAuth;
