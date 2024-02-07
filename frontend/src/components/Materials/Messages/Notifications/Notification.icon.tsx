export function NotificationIcons({ image, icon: Icon }) {
    return (
        <div className="relative inline-block shrink-0">
            <img
                className="w-12 h-12 rounded-full"
                src={image}
                alt="Jese Leos image"
            />
            {Icon && (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                    <Icon fill="currentColor" className="w-3 h-3 text-white" />
                </span>
            )}
        </div>
    );
}
