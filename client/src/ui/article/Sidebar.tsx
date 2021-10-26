export interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className, children }) => {
    return (
        <div className={`${className} flex w-20 justify-center mt-12 ml-2 mr-6 text-gray-600`}>
            <div className=''>{children}</div>
        </div>
    );
};
