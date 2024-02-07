import { SelectLanguageComp } from '../../components/Materials/Drops/SelectLanguage/SelectLanguage.comp';
import { LayoutAuthProps } from './LayoutAuth.props';

const LayoutAuth = ({ children }: LayoutAuthProps) => {
    return (
        <section className='flex w-[100vw] min-h-[100vh]'>
            <div className="min-h-[100vh] w-full relative container">
                <div className="absolute top-[15px] right-[15px] lg:right-[5vw] lg:top-[5vw]">
                    <SelectLanguageComp />
                </div>
                {children}
            </div>
        </section>
    );
};

export default LayoutAuth;
