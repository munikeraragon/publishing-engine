import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetUserQuery } from '../../generated/apolloComponents';
import { Sidebar } from '../sidebar/Sidebar';

export interface SidebarProps {
    open: boolean;
    setOpen: (_: boolean) => void;
    className?: string;
}

export const SidebarWrapper: React.FC<SidebarProps> = ({ open, setOpen }) => {
    const router = useRouter();
    const { loading, data } = useGetUserQuery();
    const [tabs, setTabs] = useState(getPublicTabs());

    useEffect(() => {
        if (data?.getUser.userName === 'munikeraragon') {
            setTabs([...getPublicTabs(), ...getAdminTabs()]);
        }
    }, [loading, router]);

    return <Sidebar open={open} setOpen={setOpen} tabs={tabs} />;
};

const getPublicTabs = () => {
    return [
        {
            label: 'home',
            path: '/dash/home',
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-6 w-6 mr-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                </svg>
            )
        },
        {
            label: 'my content',
            path: '/dash/mycontent',
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-6 w-6 mr-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                    />
                </svg>
            )
        },
        {
            label: 'reading list',
            path: '/dash/readinglist',
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-6 w-6 mr-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                    />
                </svg>
            )
        }
    ];
};

const getAdminTabs = () => {
    return [
        {
            label: 'Admin',
            path: '/dash/admin',
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-6 w-6 mr-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                    />
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                </svg>
            )
        }
    ];
};

/* const tabsToImplement = [
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
    ]; */
