import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import NavbarRoot from './NavbarRoot';

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon
    },
    {
        name: 'Security',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: ShieldCheckIcon
    },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon
    }
];
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon }
];
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: SupportIcon
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkAltIcon
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon
    },
    {
        name: 'Security',
        description: 'Understand how we take your privacy seriously.',
        href: '#',
        icon: ShieldCheckIcon
    }
];
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    {
        id: 2,
        name: 'How to use search engine optimization to drive traffic to your site',
        href: '#'
    },
    { id: 3, name: 'Improve your customer experience', href: '#' }
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const Navbar: React.FC = () => {
    return (
        <Popover className='fixed w-full bg-white z-10'>
            {({ open }) => (
                <NavbarRoot>
                    <div className='px-4 sm:px-6'>
                        <div className='flex justify-between items-center py-4 md:justify-start md:space-x-10'>
                            <div className=''>
                                <Link href='/'>
                                    <div className='flex'>
                                        <svg
                                            version='1.1'
                                            id='Capa_1'
                                            xmlns='http://www.w3.org/2000/svg'
                                            x='0px'
                                            y='0px'
                                            viewBox='0 0 471.477 471.477'
                                            className='flex-shrink-0 h-6 w-6 mr-3'
                                            // style='enable-background:new 0 0 471.477 471.477;'
                                        >
                                            <g>
                                                <g>
                                                    <path
                                                        d='M190.024,105.178c-17.673,0-32,14.327-32,32s14.327,32,32,32c17.673,0,32-14.327,32-32S207.697,105.178,190.024,105.178z
			 M190.024,153.178c-8.837,0-16-7.163-16-16c0.044-8.805,7.195-15.92,16-15.92v-0.08c8.837,0,16,7.163,16,16
			S198.861,153.178,190.024,153.178z'
                                                    />
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d='M281.544,105.178c-17.673,0-32,14.327-32,32s14.327,32,32,32c17.673,0,32-14.327,32-32S299.217,105.178,281.544,105.178z
			 M281.544,153.178c-8.837,0-16-7.163-16-16c0.044-8.805,7.195-15.92,16-15.92v-0.08c8.837,0,16,7.163,16,16
			S290.381,153.178,281.544,153.178z'
                                                    />
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d='M379.097,142.007c-3.452-18.993-18.742-33.603-37.872-36.189c-5.28-19.52-20.48-36.16-51.04-36.16h-46.4v-17.6
			c14.034-4.418,21.829-19.377,17.41-33.41c-4.418-14.034-19.377-21.829-33.41-17.41c-14.034,4.418-21.829,19.377-17.41,33.41
			c2.613,8.298,9.112,14.798,17.41,17.41v17.2h-46.32c-21.6,0-44.32,9.92-51.2,36.16c-24.381,3.347-41.433,25.825-38.086,50.206
			c2.624,19.117,17.255,34.372,36.246,37.794l-0.08,0.4c2.4,35.12,28.48,48,53.04,48h108.8c36.56,0,51.2-24,53.04-48
			C367.437,189.416,383.498,166.22,379.097,142.007z M128.104,177.818c-15.11-4.368-23.819-20.158-19.452-35.268
			c2.715-9.393,10.059-16.737,19.452-19.452V177.818z M225.144,27.098c0-5.876,4.764-10.64,10.64-10.64
			c5.876,0,10.64,4.764,10.64,10.64c0,5.876-4.764,10.64-10.64,10.64C229.908,37.738,225.144,32.974,225.144,27.098z
			 M327.464,188.058c0,13.92-4.88,37.28-37.28,37.28h-108.72c-13.92,0-37.28-4.88-37.28-37.28l-0.08-64.96
			c0-32.48,23.36-37.28,37.28-37.28h108.8c32.48,0,37.28,23.36,37.28,37.28V188.058z M343.144,177.258v-54.72
			c12.196,3.52,20.604,14.667,20.64,27.36C363.748,162.591,355.34,173.738,343.144,177.258z'
                                                    />
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d='M281.544,190.938h-91.52c-4.418,0-8,3.582-8,8s3.582,8,8,8h91.52c4.418,0,8-3.582,8-8S285.962,190.938,281.544,190.938z' />
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d='M413.784,256.778L413.784,256.778c-0.153-17.142-14.173-30.915-31.315-30.762c-14.344,0.128-26.732,10.067-29.965,24.042
			l-21.36,4.16h-190.72l-21.36-4.16c-3.66-16.748-20.203-27.358-36.951-23.698c-16.748,3.66-27.358,20.203-23.698,36.951
			c2.488,11.384,11.141,20.416,22.409,23.388v59.76c-13.533,3.61-22.972,15.834-23.04,29.84v14.16c0,4.418,3.582,8,8,8s8-3.582,8-8
			v-14.24c0-8.306,6.734-15.04,15.04-15.04c8.306,0,15.04,6.734,15.04,15.04v14.24c0,4.418,3.582,8,8,8c4.418,0,8-3.582,8-8v-14.24
			c-0.068-14.006-9.507-26.23-23.04-29.84v-59.76c10.163-2.738,18.239-10.453,21.44-20.48l13.36,2.64v98.72
			c0.016,14.473,3.068,28.781,8.96,42v0.72c23.619,52.357,85.21,75.653,137.566,52.034c23.106-10.424,41.61-28.927,52.034-52.034
			l0.4-0.88c5.955-13.151,9.089-27.404,9.2-41.84v-98.72l13.36-2.64c3.201,10.027,11.277,17.742,21.44,20.48v59.76
			c-13.533,3.61-22.972,15.834-23.04,29.84v14.24c0,4.418,3.582,8,8,8s8-3.582,8-8v-14.24c0.008-8.306,6.748-15.034,15.054-15.026
			c8.295,0.008,15.018,6.731,15.026,15.026v14.24c0,4.418,3.582,8,8,8s8-3.582,8-8v-14.24c-0.068-14.006-9.507-26.23-23.04-29.84
			v-59.76C404.18,283.069,413.696,270.829,413.784,256.778z M88.824,271.818c-8.306,0-15.04-6.734-15.04-15.04
			c0-8.306,6.734-15.04,15.04-15.04c8.306,0,15.04,6.734,15.04,15.04C103.864,265.084,97.13,271.818,88.824,271.818z
			 M235.784,455.578c-30.139-0.001-58.182-15.425-74.32-40.88h148.64C293.966,440.152,265.923,455.577,235.784,455.578z
			 M323.784,367.578c-0.039,10.668-2.018,21.24-5.84,31.2h-164.48c-3.822-9.96-5.801-20.532-5.84-31.2v-97.36h176.16V367.578z
			 M382.827,271.816c-0.028,0-0.055,0.001-0.083,0.001l-0.16-0.24c-8.306,0-15.04-6.734-15.04-15.04
			c0-8.306,6.734-15.04,15.04-15.04c8.306,0,15.04,6.734,15.04,15.04C397.757,264.843,391.132,271.683,382.827,271.816z'
                                                    />
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d='M264.085,326.679c-1.465-1.322-3.367-2.056-5.341-2.061h-24l29.44-30.24c2.83-3.393,2.375-8.437-1.018-11.268
			c-3.034-2.531-7.461-2.468-10.422,0.148l-42.64,43.84c-3.093,3.155-3.042,8.22,0.113,11.313c1.507,1.477,3.537,2.299,5.647,2.287
			h24.64l-30.32,33.76c-2.952,3.272-2.702,8.316,0.56,11.28h0c3.272,2.952,8.316,2.702,11.28-0.56l42.64-47.2
			C267.624,334.698,267.365,329.639,264.085,326.679z'
                                                    />
                                                </g>
                                            </g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                        </svg>
                                        Codegrow
                                    </div>
                                </Link>
                            </div>
                            <div className='-mr-2 -my-2 md:hidden'>
                                <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                                    <span className='sr-only'>Open menu</span>
                                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                                </Popover.Button>
                            </div>
                            <Popover.Group as='nav' className='hidden md:flex space-x-10'>
                                <Popover className='relative'>
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900' : 'text-gray-700',
                                                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                )}>
                                                <span>Posts</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-600' : 'text-gray-400',
                                                        'ml-2 h-5 w-5 group-hover:text-indigo-500'
                                                    )}
                                                    aria-hidden='true'
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter='transition ease-out duration-200'
                                                enterFrom='opacity-0 translate-y-1'
                                                enterTo='opacity-100 translate-y-0'
                                                leave='transition ease-in duration-150'
                                                leaveFrom='opacity-100 translate-y-0'
                                                leaveTo='opacity-0 translate-y-1'>
                                                <Popover.Panel
                                                    static
                                                    className='absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/4'>
                                                    <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                                                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                            {solutions.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                                                    <item.icon
                                                                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                                                        aria-hidden='true'
                                                                    />
                                                                    <div className='ml-4'>
                                                                        <p className='text-base font-medium text-gray-900'>
                                                                            {item.name}
                                                                        </p>
                                                                        <p className='mt-1 text-sm text-gray-500'>
                                                                            {item.description}
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                        <div className='px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                                                            {callsToAction.map((item) => (
                                                                <div
                                                                    key={item.name}
                                                                    className='flow-root'>
                                                                    <a
                                                                        href={item.href}
                                                                        className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'>
                                                                        <item.icon
                                                                            className='flex-shrink-0 h-6 w-6 text-gray-400'
                                                                            aria-hidden='true'
                                                                        />
                                                                        <span className='ml-3'>
                                                                            {item.name}
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <Link href='#projects'>
                                    <span className='text-base font-medium text-gray-700 hover:text-indigo-500'>
                                        Projects
                                    </span>
                                </Link>

                                <Link href='#contact'>
                                    <span className='text-base font-medium text-gray-700 hover:text-indigo-500'>
                                        Contact
                                    </span>
                                </Link>

                                <Popover className='relative'>
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900' : 'text-gray-700',
                                                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                )}>
                                                <span>More</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-600' : 'text-gray-400',
                                                        'ml-2 h-5 w-5 group-hover:text-indigo-500'
                                                    )}
                                                    aria-hidden='true'
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter='transition ease-out duration-200'
                                                enterFrom='opacity-0 translate-y-1'
                                                enterTo='opacity-100 translate-y-0'
                                                leave='transition ease-in duration-150'
                                                leaveFrom='opacity-100 translate-y-0'
                                                leaveTo='opacity-0 translate-y-1'>
                                                <Popover.Panel
                                                    static
                                                    className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0'>
                                                    <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                                                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                            {resources.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                                                    <item.icon
                                                                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                                                        aria-hidden='true'
                                                                    />
                                                                    <div className='ml-4'>
                                                                        <p className='text-base font-medium text-gray-900'>
                                                                            {item.name}
                                                                        </p>
                                                                        <p className='mt-1 text-sm text-gray-500'>
                                                                            {item.description}
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                        <div className='px-5 py-5 bg-gray-50 sm:px-8 sm:py-8'>
                                                            <div>
                                                                <h3 className='text-sm tracking-wide font-medium text-gray-500 uppercase'>
                                                                    Recent Posts
                                                                </h3>
                                                                <ul className='mt-4 space-y-4'>
                                                                    {recentPosts.map((post) => (
                                                                        <li
                                                                            key={post.id}
                                                                            className='text-base truncate'>
                                                                            <a
                                                                                href={post.href}
                                                                                className='font-medium text-gray-900 hover:text-gray-700'>
                                                                                {post.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className='mt-5 text-sm'>
                                                                <a
                                                                    href='#'
                                                                    className='font-medium text-indigo-600 hover:text-indigo-500'>
                                                                    {' '}
                                                                    View all posts{' '}
                                                                    <span aria-hidden='true'>
                                                                        &rarr;
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </Popover.Group>
                            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
                                <Link href='/login'>
                                    <span
                                        className='ml-8 whitespace-nowrap inline-flex items-center justify-center
                                        px-4 py-2 border border-transparent rounded-md shadow-sm text-base
                                        font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                                        Log in
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter='duration-200 ease-out'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='duration-100 ease-in'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'>
                        <Popover.Panel
                            focus
                            static
                            className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
                            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                                <div className='pt-5 pb-6 px-5'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <img
                                                className='h-8 w-auto'
                                                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                                                alt='Workflow'
                                            />
                                        </div>
                                        <div className='-mr-2'>
                                            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                                                <span className='sr-only'>Close menu</span>
                                                <XIcon className='h-6 w-6' aria-hidden='true' />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className='mt-6'>
                                        <nav className='grid gap-y-8'>
                                            {solutions.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                                                    <item.icon
                                                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                                        aria-hidden='true'
                                                    />
                                                    <span className='ml-3 text-base font-medium text-gray-900'>
                                                        {item.name}
                                                    </span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                                <div className='py-6 px-5 space-y-6'>
                                    <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                                        <a
                                            href='#'
                                            className='text-base font-medium text-gray-900 hover:text-gray-700'>
                                            Pricing
                                        </a>

                                        <a
                                            href='#'
                                            className='text-base font-medium text-gray-900 hover:text-gray-700'>
                                            Docs
                                        </a>
                                        {resources.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className='text-base font-medium text-gray-900 hover:text-gray-700'>
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div>
                                        <Link href='/login-page'>
                                            <span className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                                                Log in
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </NavbarRoot>
            )}
        </Popover>
    );
};
