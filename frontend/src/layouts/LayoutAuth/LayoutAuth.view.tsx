import { LayoutAuthProps } from './LayoutAuth.props';

const LayoutAuth = ({ children }: LayoutAuthProps) => {
    return (
        <section className='flex w-[100vw] min-h-[100vh]'>
            <div className="min-h-[100vh] w-full relative container">
                {children}
            </div>
        </section>
    );
};

export default LayoutAuth;
