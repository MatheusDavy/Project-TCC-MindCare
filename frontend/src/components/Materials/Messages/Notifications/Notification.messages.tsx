type Props = {
    title?: string;
    message?: string;
    description?: string;
};

export function NotificationMessages({ title, message, description }: Props) {
    return (
        <div className="ms-3 text-sm font-normal">
            {title && (
                <div className="text-sm font-semibold text-gray-900">
                    {title}
                </div>
            )}
            {message && <div className="text-sm font-normal">{message}</div>}
            {description && (
                <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                    {description}
                </span>
            )}
        </div>
    );
}
