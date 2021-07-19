import { SidebarTab } from './SidebarTab';
import { useRouter } from 'next/router';

export interface SidebarProps {
    open: boolean;
    setOpen: (_: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
    const router = useRouter();

    const tabs = [
        {
            label: 'home',
            icon: (
                <svg className='flex-shrink-0 h-6 w-6 mr-3' viewBox='0 0 24 24'>
                    <path
                        className={`fill-current text-gray-400 ${
                            router.pathname === '/dash/home' && 'text-indigo-500'
                        }`}
                        d='M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z'
                    />
                    <path
                        className={`fill-current text-gray-600 ${
                            router.pathname === '/dash/home' && 'text-indigo-600'
                        }`}
                        d='M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z'
                    />
                    <path
                        className={`fill-current text-gray-400 ${
                            router.pathname === '/dash/home' && 'text-indigo-200'
                        }`}
                        d='M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z'
                    />
                </svg>
            )
        },
        {
            label: 'my content',
            icon: (
                <svg className='flex-shrink-0 h-6 w-6 mr-3' viewBox='0 0 24 24'>
                    <path
                        className={`fill-current text-gray-400 ${
                            router.pathname === '/dash/mycontent' && 'text-indigo-300'
                        }`}
                        d='M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z'
                    />
                    <path
                        className={`fill-current text-gray-700 ${
                            router.pathname === '/dash/mycontent' && 'text-indigo-600'
                        }`}
                        d='M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z'
                    />
                    <path
                        className={`fill-current text-gray-600 ${
                            router.pathname === '/dash/mycontent' && 'text-indigo-500'
                        }`}
                        d='M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z'
                    />
                </svg>
            )
        },
        {
            label: 'subscriptions',
            icon: (
                <svg className='flex-shrink-0 h-6 w-6 mr-3' viewBox='0 0 24 24'>
                    <path
                        className={`fill-current text-gray-600 ${
                            router.pathname === '/dash/subscriptions' && 'text-indigo-500'
                        }`}
                        d='M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z'
                    />
                    <path
                        className={`fill-current text-gray-400 ${
                            router.pathname === '/dash/subscriptions' && 'text-indigo-300'
                        }`}
                        d='M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z'
                    />
                </svg>
            )
        },
        {
            label: 'tags',
            icon: (
                <svg className='flex-shrink-0 h-6 w-6 mr-3' viewBox='0 0 24 24'>
                    <path
                        className={`fill-current text-gray-600 ${
                            router.pathname === '/dash/posts' && 'text-indigo-500'
                        }`}
                        d='M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z'
                    />
                    <path
                        className={`fill-current text-gray-400 ${
                            router.pathname === '/dash/posts' && 'text-indigo-300'
                        }`}
                        d='M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z'
                    />
                </svg>
            )
        },
        {
            label: 'posts',
            icon: (
                <svg className='flex-shrink-0 h-6 w-6 mr-3' viewBox='0 0 24 24'>
                    <path
                        className={`fill-current text-gray-600 ${
                            router.pathname === '/dash/posts' && 'text-indigo-500'
                        }`}
                        d='M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z'
                    />
                    <path
                        className={`fill-current text-gray-400 ${
                            router.pathname === '/dash/posts' && 'text-indigo-300'
                        }`}
                        d='M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z'
                    />
                </svg>
            )
        },

        {
            label: 'projects',
            icon: (
                <svg className='flex-shrink-0 h-6 w-6 mr-3' viewBox='0 0 24 24'>
                    <path
                        className={`fill-current text-gray-400 ${
                            router.pathname === '/dash/projects' && 'text-indigo-300'
                        }`}
                        d='M7 0l6 7H8v10H6V7H1z'
                    />
                    <path
                        className={`fill-current text-gray-600 ${
                            router.pathname === '/dash/projects' && 'text-indigo-500'
                        }`}
                        d='M18 7v10h5l-6 7-6-7h5V7z'
                    />
                </svg>
            )
        },
        {
            label: 'insight',
            icon: (
                <svg className='flex-shrink-0 h-6 w-6 mr-3' viewBox='0 0 24 24'>
                    <path
                        className={`fill-current text-gray-600 ${
                            router.pathname === '/dash/insight' && 'text-indigo-500'
                        }`}
                        d='M8 1v2H3v19h18V3h-5V1h7v23H1V1z'
                    />
                    <path
                        className={`fill-current text-gray-600 ${
                            router.pathname === '/dash/insight' && 'text-indigo-500'
                        }`}
                        d='M1 1h22v23H1z'
                    />
                    <path
                        className={`fill-current text-gray-400 ${
                            router.pathname === '/dash/insight' && 'text-indigo-300'
                        }`}
                        d='M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z'
                    />
                </svg>
            )
        },
        {
            label: 'settings',
            icon: (
                <svg className='flex-shrink-0 h-6 w-6 mr-3' viewBox='0 0 24 24'>
                    <path
                        className={`fill-current text-gray-600 ${
                            router.pathname === '/dash/settings' && 'text-indigo-500'
                        }`}
                        d='M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z'
                    />
                    <path
                        className={`fill-current text-gray-400 ${
                            router.pathname === '/dash/settings' && 'text-indigo-300'
                        }`}
                        d='M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z'
                    />
                    <path
                        className={`fill-current text-gray-600 ${
                            router.pathname === '/dash/settings' && 'text-indigo-500'
                        }`}
                        d='M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z'
                    />
                    <path
                        className={`fill-current text-gray-400 ${
                            router.pathname === '/dash/settings' && 'text-indigo-300'
                        }`}
                        d='M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z'
                    />
                </svg>
            )
        },
        {
            label: 'profile',
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-6 w-6 mr-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                </svg>
            )
        }
    ];

    return (
        <div
            className='lg:w-64 z-20'
            style={{
                boxShadow:
                    '0 .125rem 9.375rem rgba(90,97,105,.1),0 .25rem .5rem rgba(90,97,105,.12),0 .9375rem 1.375rem rgba(90,97,105,.1),0 .4375rem 2.1875rem rgba(165,182,201,.1)'
            }}>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40
                 lg:hidden lg:z-auto transition-opacity duration-200 ${
                     open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                 }`}
                aria-hidden='true'></div>

            {/* Sidebar */}
            <div
                className={`absolute z-40 left-0 top-0 lg:static lg:left-auto
                 lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll
                  lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-white
                py-4 transition-transform duration-200 ease-in-out ${
                    open ? 'translate-x-0' : '-translate-x-64'
                }`}>
                {/* Sidebar header */}
                <div className='flex justify-between pr-3 sm:px-2'>
                    {/* Close button */}
                    <button
                        className='lg:hidden text-gray-500 hover:text-gray-400'
                        onClick={() => setOpen(!open)}
                        aria-controls='sidebar'
                        aria-expanded={open}>
                        <span className='sr-only'>Close sidebar</span>
                        <svg
                            className='w-6 h-6 fill-current'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
                        </svg>
                    </button>
                </div>

                <div className='h-12 border-b mb-8'>
                    <h1>Codegrow</h1>
                </div>

                {/* Links */}
                <div className='px-4'>
                    <h3 className='text-xs uppercase text-gray-500 font-semibold pl-3'>
                        components
                    </h3>
                    <ul className='mt-3'>
                        {tabs.map((element: any, index) => (
                            <SidebarTab
                                key={index}
                                label={element.label}
                                icon={element.icon}
                                path={router.pathname}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
