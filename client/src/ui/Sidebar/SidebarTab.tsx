import Link from 'next/link';

export interface SidebarTabProps {
    path: string;
    label: string;
    icon: React.ReactElement;
}

export const SidebarTab: React.FC<SidebarTabProps> = ({ path, icon, label }) => {
    return (
        <Link href={`/dash/${label.replace(/\s+/g, '')}`}>
            <button
                className={`w-full px-3 py-2 rounded-lg mb-2 last:mb-0 hover:bg-gray-200 ${
                    '/dash/' + label.replace(/\s+/g, '') === path && 'bg-gray-200'
                }`}>
                <div
                    className={`block text-gray-600 transition duration-150 ${
                        '/dash/' + label.replace(/\s+/g, '') === path && 'text-indigo-600'
                    }`}>
                    <div className='flex flex-grow'>
                        {icon}
                        <span className='text-sm font-medium'>{label}</span>
                    </div>
                </div>
            </button>
        </Link>
    );
};
