export interface SidebarTabProps {
    onClick: () => void;
    onKeyDown: () => void;
    component: string;
    label: string;
    icon: React.ReactElement;
}

export const SidebarTab: React.FC<SidebarTabProps> = ({
    onClick,
    onKeyDown,
    component,
    icon,
    label
}) => {
    return (
        <button
            onClick={onClick}
            onKeyDown={onKeyDown}
            className={`w-full px-3 py-2 rounded-sm mb-0.5 last:mb-0 hover:bg-gray-200 ${
                component === label && 'bg-gray-200'
            }`}>
            <div
                className={`block text-gray-600 transition duration-150 ${
                    component === label && 'text-indigo-500'
                }`}>
                <div className='flex flex-grow'>
                    {icon}
                    <span className='text-sm font-medium'>{label}</span>
                </div>
            </div>
        </button>
    );
};
