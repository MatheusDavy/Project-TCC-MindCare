import { LayoutAuthProps } from './LayoutAuth.props';

const LayoutAuth = ({ children }: LayoutAuthProps) => {
    return (
        <section className='flex w-full min-h-[100vh] max-w-[100%] overflow-x-hidden'>
            <div className="min-h-[100vh] w-full relative container">
                {children}
            </div>
        </section>
    );
};

export default LayoutAuth;
