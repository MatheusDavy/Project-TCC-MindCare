import { LayoutAdminProps } from './LayoutAdmin.props';

const LayoutAdmin = ({ children }: LayoutAdminProps) => {
    return (

        <section>
            <h1>Layout - Admin</h1>
            {children}
        </section>

    );
};

export default LayoutAdmin;
