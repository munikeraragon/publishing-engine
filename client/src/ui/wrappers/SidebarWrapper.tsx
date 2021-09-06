import { Sidebar } from '../sidebar/Sidebar';
import { useGetUserQuery } from '../../generated/apolloComponents';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
            setTabs([...getPublicTabs(), ...getAdminTabs(router)]);
        }
    }, [loading, router]);

    return <Sidebar open={open} setOpen={setOpen} tabs={tabs} />;
};

const getPublicTabs = () => {
    return [
        {
            label: 'home',
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 44 44'
                    className='flex-shrink-0 h-7 w-7 mr-3'
                    aria-hidden='true'>
                    <g className='nc-icon-wrapper'>
                        <path
                            fill='#A0041E'
                            d='M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z'></path>
                        <path fill='#FFE8B6' d='M9 20L22 7l13 13v17H9z'></path>
                        <path fill='#FFCC4D' d='M22 20h1v16h-1z'></path>
                        <path
                            fill='#66757F'
                            d='M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z'></path>
                        <path
                            fill='#66757F'
                            d='M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z'></path>
                        <path fill='#C1694F' d='M14 30h4v6h-4z'></path>
                        <path fill='#55ACEE' d='M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z'></path>
                        <path
                            fill='#5C913B'
                            d='M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z'></path>
                    </g>
                </svg>
            )
        },
        {
            label: 'my content',
            icon: (
                <svg
                    viewBox='0 0 512.0113 512'
                    className='flex-shrink-0 h-6 w-6 mr-3'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='m248.074219 80.796875h.089843l159.953126-42.902344c9.433593-2.484375 19.097656 3.117188 21.628906 12.535157l22.777344 85.097656 10.328124 38.578125v.089843l48.550782 180.964844c2.527344 9.40625-3.042969 19.085938-12.449219 21.625l-97.367187 26.042969zm0 0'
                        fill='#f3d55b'
                    />
                    <path
                        d='m99.59375 47.078125c4.152344-2.785156 9.308594-3.625 14.125-2.296875l341.097656 91.367188c9.40625 2.539062 14.976563 12.21875 12.449219 21.625l-91.367187 341.097656c-2.539063 9.40625-12.21875 14.976562-21.628907 12.449218l-341.097656-91.367187c-9.40625-2.539063-14.976563-12.21875-12.445313-21.628906l73.445313-274.183594zm0 0'
                        fill='#f9eab0'
                    />
                    <g fill='#802f34'>
                        <path d='m399.238281 198.644531c-.773437.003907-1.539062-.097656-2.285156-.296875l-125.566406-33.609375c-4.707031-1.261719-7.503907-6.101562-6.238281-10.8125 1.261718-4.710937 6.101562-7.503906 10.8125-6.242187l125.5625 33.652344c4.28125 1.144531 7.046874 5.285156 6.472656 9.675781-.578125 4.390625-4.320313 7.675781-8.75 7.679687zm0 0' />
                        <path d='m385.519531 249.847656c-.769531 0-1.539062-.101562-2.285156-.300781l-85.363281-22.839844c-3.058594-.800781-5.457032-3.179687-6.28125-6.234375-.824219-3.054687.050781-6.316406 2.289062-8.550781 2.238282-2.234375 5.503906-3.101563 8.554688-2.269531l85.363281 22.839844c4.28125 1.144531 7.046875 5.28125 6.472656 9.675781-.578125 4.390625-4.320312 7.675781-8.75 7.679687zm0 0' />
                        <path d='m371.847656 301.046875c-.777344 0-1.546875-.101563-2.296875-.300781l-106.195312-28.503906c-4.710938-1.265626-7.5-6.109376-6.238281-10.820313 1.265624-4.707031 6.109374-7.5 10.820312-6.234375l106.195312 28.503906c4.28125 1.144532 7.046876 5.285156 6.46875 9.679688-.578124 4.394531-4.324218 7.675781-8.753906 7.675781zm0 0' />
                        <path d='m110.839844 285.914062c-.773438.003907-1.546875-.097656-2.292969-.296874l-25.601563-6.859376c-4.707031-1.265624-7.5-6.109374-6.234374-10.820312 1.261718-4.707031 6.105468-7.5 10.816406-6.234375l25.601562 6.855469c4.277344 1.148437 7.046875 5.289062 6.46875 9.683594-.578125 4.390624-4.324218 7.675781-8.757812 7.671874zm0 0' />
                        <path d='m358.109375 352.167969c-.769531 0-1.539063-.101563-2.285156-.300781l-196.113281-52.585938c-4.710938-1.261719-7.503907-6.105469-6.242188-10.816406 1.261719-4.707032 6.105469-7.503906 10.816406-6.238282l196.113282 52.539063c4.277343 1.148437 7.046874 5.285156 6.46875 9.679687-.578126 4.390626-4.316407 7.675782-8.746094 7.675782zm0 0' />
                        <path d='m97.125 337.070312c-.773438.003907-1.542969-.097656-2.289062-.300781l-25.597657-6.847656c-4.710937-1.261719-7.503906-6.105469-6.242187-10.816406 1.261718-4.707031 6.105468-7.503907 10.8125-6.238281l25.601562 6.847656c4.28125 1.148437 7.046875 5.289062 6.46875 9.683594-.578125 4.390624-4.324218 7.675781-8.753906 7.671874zm0 0' />
                        <path d='m344.410156 403.332031c-.773437 0-1.539062-.101562-2.285156-.300781l-196.125-52.550781c-3.046875-.816407-5.425781-3.195313-6.242188-6.242188-.8125-3.046875.058594-6.300781 2.289063-8.527343 2.230469-2.230469 5.480469-3.101563 8.527344-2.285157l196.113281 52.550781c4.277344 1.144532 7.046875 5.285157 6.46875 9.675782-.574219 4.390625-4.316406 7.675781-8.746094 7.679687zm0 0' />
                    </g>
                    <path
                        d='m255.753906 266.972656-58.171875-19.421875 49.964844-49.964843 19.417969 58.175781c1.042968 3.179687.203125 6.679687-2.164063 9.046875-2.367187 2.367187-5.863281 3.203125-9.046875 2.164062zm0 0'
                        fill='#bdc3c7'
                    />
                    <path
                        d='m85.292969 35.335938-49.964844 49.964843-24.980469-24.984375c-13.796875-13.796875-13.796875-36.164062 0-49.960937 13.796875-13.800781 36.167969-13.800781 49.964844 0zm0 0'
                        fill='#fb7b76'
                    />
                    <path
                        d='m247.546875 197.585938-18.714844 18.714843v.089844l-12.449219 12.445313h-.085937l-18.714844 18.714843-137.269531-137.269531 18.800781-18.714844 12.449219-12.445312 18.714844-18.804688zm0 0'
                        fill='#e64c3c'
                    />
                    <path
                        d='m35.335938 85.300781 49.960937-49.964843 24.980469 24.984374-49.960938 49.960938zm0 0'
                        fill='#bdc3c7'
                    />
                    <path
                        d='m122.722656 122.730469c-1.679687 1.632812-3.925781 2.550781-6.265625 2.558593-2.316406-.011718-4.535156-.929687-6.179687-2.558593l-31.164063-31.164063 12.449219-12.445312 31.160156 31.160156c3.421875 3.445312 3.421875 9.003906 0 12.449219zm0 0'
                        fill='#c03a2b'
                    />
                    <path
                        d='m228.832031 216.300781v.089844l-12.449219 12.445313h-.085937l-81.125-81.125c-2.242187-2.238282-3.117187-5.503907-2.296875-8.5625.820312-3.058594 3.210938-5.449219 6.269531-6.265626 3.058594-.820312 6.320313.054688 8.5625 2.292969zm0 0'
                        fill='#c03a2b'
                    />
                </svg>
            )
        },
        {
            label: 'reading list',
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 44 44'
                    className='flex-shrink-0 h-7 w-7 mr-3'>
                    <g className='nc-icon-wrapper'>
                        <path
                            fill='#67757F'
                            d='M39 24c0 2.209-1.791 2-4 2H9c-2.209 0-4 .209-4-2l2-12c.125-1.917 1.791-4 4-4h22c2.209 0 3.791 2.208 4 4l2 12z'></path>
                        <path
                            fill='#CCD6DD'
                            d='M32 17a2 2 0 01-2 2H14a2 2 0 01-2-2V9a2 2 0 012-2h16a2 2 0 012 2v8z'></path>
                        <path
                            fill='#E1E8ED'
                            d='M34 21a2 2 0 01-2 2H12a2 2 0 01-2-2v-8a2 2 0 012-2h20a2 2 0 012 2v8z'></path>
                        <path
                            fill='#F5F8FA'
                            d='M36 25a2 2 0 01-2 2H10a2 2 0 01-2-2v-8a2 2 0 012-2h24a2 2 0 012 2v8z'></path>
                        <path
                            fill='#9AAAB4'
                            d='M39 35a4 4 0 01-4 4H9a4 4 0 01-4-4V24a4 4 0 014-4h26a4 4 0 014 4v11z'></path>
                        <path fill='#67757F' d='M18 16zm0 0z'></path>
                        <path
                            fill='#FCAB40'
                            d='M26 5h-5a2 2 0 00-2 2v1h4a2 2 0 012 2h1a2 2 0 002-2V7a2 2 0 00-2-2z'></path>
                        <path
                            fill='#5DADEC'
                            d='M22 9h-5a2 2 0 00-2 2v1h4a2 2 0 012 2h1a2 2 0 002-2v-1a2 2 0 00-2-2z'></path>
                        <path
                            fill='#E75A70'
                            d='M20 16a2 2 0 01-2 2h-5a2 2 0 01-2-2v-1a2 2 0 012-2h5a2 2 0 012 2v1z'></path>
                        <path
                            fill='#67757F'
                            d='M29 32a2 2 0 01-2 2H17a2 2 0 01-2-2v-5a2 2 0 012-2h10a2 2 0 012 2v5zm-11-4z'></path>
                        <path
                            fill='#E1E8ED'
                            d='M27 31a1 1 0 01-1 1h-8a1 1 0 01-1-1v-3a1 1 0 011-1h8a1 1 0 011 1v3z'></path>
                    </g>
                </svg>
            )
        }
    ];
};

const getAdminTabs = (router: NextRouter) => {
    return [
        {
            label: 'admin',
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={`h-6 w-6 text-gray-600 mr-3 ${
                        router.pathname === '/dash/admin' && 'text-indigo-500'
                    }`}
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                        fillRule='evenodd'
                        d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                        clipRule='evenodd'
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
