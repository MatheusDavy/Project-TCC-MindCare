import { LayoutClientProps } from './LayoutClient.props';

// Context / Providers
import { AsideComp } from '../../components/Layouts/Navbars/Aside/Aside.comp';

const LayoutClient = ({ children }: LayoutClientProps) => {
    return (
        <div className='container-main-wrapper'>
            <AsideComp />
            {children}
        </div>
    );
};

export default LayoutClient;
