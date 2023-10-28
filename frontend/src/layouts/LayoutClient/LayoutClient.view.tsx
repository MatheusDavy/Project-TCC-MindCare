import { LayoutClientProps } from "./LayoutClient.props";

const LayoutClient = ({ children }: LayoutClientProps) => {
    return (
        <section>
            <h1>Layout - Client</h1>
            {children}
        </section>
    )
}

export default LayoutClient;