import { SidebarTab } from './SidebarTab';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

export interface SidebarProps {
    open: boolean;
    setOpen: (_: boolean) => void;
    tabs: Tab[];
}

export interface Tab {
    label: string;
    icon: ReactElement;
}

export const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, tabs }) => {
    const router = useRouter();

    return (
        <div
            className='md:w-64 z-20'
            style={{
                boxShadow:
                    '0 .125rem 9.375rem rgba(90,97,105,.1),0 .25rem .5rem rgba(90,97,105,.12),0 .9375rem 1.375rem rgba(90,97,105,.1),0 .4375rem 2.1875rem rgba(165,182,201,.1)'
            }}>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40
                 md:hidden md:z-auto transition-opacity duration-200 ${
                     open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                 }`}
                aria-hidden='true'></div>

            {/* Sidebar */}
            <div
                className={`absolute z-40 left-0 top-0 md:static md:left-auto
                 md:top-auto md:translate-x-0 transform h-screen overflow-y-scroll
                  md:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-white
                py-4 transition-transform duration-200 ease-in-out ${
                    open ? 'translate-x-0' : '-translate-x-64'
                }`}>
                {/* Sidebar header */}
                <div className='flex h-12 border-b mb-8'>
                    {/* Close button */}
                    <div className='ml-2'>
                        <button
                            className='md:hidden text-gray-500 hover:text-gray-400'
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
                    <div className='flex justify-center flex-1'>
                        <span className='text-xl hover:text-indigo-600 text-gray-600 font-semibold -ml-4'>
                            Codegrow
                        </span>
                    </div>
                </div>

                {/* Links */}
                <div className='px-4'>
                    <h3 className='text-xs uppercase text-gray-500 font-semibold pl-3'>
                        components
                    </h3>
                    <ul className='mt-3'>
                        {tabs.map((element: Tab, index) => (
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
