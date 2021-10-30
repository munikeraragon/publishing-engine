import Link from 'next/link';
import Router from 'next/router';

export interface SidebarTabProps {
    path: string;
    label: string;
    icon: React.ReactElement;
}

export const SidebarTab: React.FC<SidebarTabProps> = ({ path, icon, label }) => {
    return (
        <Link href={path}>
            <button
                className={`my-3 w-full p-3 rounded-lg mb-0.5 last:mb-0 hover:bg-gray-100 text-gray-600  ${
                    path === Router.pathname ? 'bg-gray-100' : ''
                }`}>
                <div className={`block `}>
                    <div className='flex flex-grow items-center'>
                        {icon}

                        <span className='whitespace-nowrap'>{label}</span>
                    </div>
                </div>
            </button>
        </Link>
    );
};
