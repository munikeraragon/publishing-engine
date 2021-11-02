import { ReactElement } from 'react';
import { SidebarTab } from './SidebarTab';

export interface SidebarProps {
    open: boolean;
    setOpen: (_: boolean) => void;
    tabs: Tab[];
}

export interface Tab {
    label: string;
    path: string;
    icon: ReactElement;
}
export const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, tabs }) => {
    return (
        <div className='z-50 shadow'>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-opacity-30 lg:hidden lg:z-auto transition-opacity duration-200 ${
                    open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden='true'></div>

            {/* <div className='flex absolute z-40'>
                <button
                    ref={trigger}
                    className='text-gray-500 hover:text-gray-400'
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
            </div> */}

            {/* Sidebar */}
            <div
                id='sidebar'
                className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto bg-white
                h-screen overflow-y-scroll lg:overflow-y-auto overflow-x-hidden transition-all duration-200 ease-in-out
                no-scrollbar flex-shrink-0 p-2 pt-0 transform md:translate-x-0 z-50
                 ${!open ? 'w-16 -translate-x-16' : 'w-64'}`}>
                {/* Sidebar header */}

                {/* Links */}
                <div className=''>
                    <div className='py-3 flex items-center border-b border-gray-300 dark:border-gray-400'>
                        <div className='flex ml-2 items-center my-1.5'>
                            <button className='text-gray-400 mr-5' onClick={() => setOpen(!open)}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='ml-1 h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            </button>

                            <span className='text-gray-600 text-md'>Codegrow</span>
                        </div>
                    </div>

                    <ul className=''>
                        {tabs.map((element: Tab, index) => (
                            <SidebarTab
                                key={index}
                                label={element.label}
                                icon={element.icon}
                                path={element.path}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
