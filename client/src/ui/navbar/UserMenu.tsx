import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Logout } from '../../pages/logout';
import Link from 'next/link';

export interface UserMenuProps {
    userIcon: string | undefined;
    userName: string | undefined;
}

export const UserMenu: React.FC<UserMenuProps> = ({ userIcon, userName }) => {
    return (
        <Popover className='relative inline-flex ml-3'>
            {({ open }) => (
                <>
                    <Popover.Button className='inline-flex justify-center items-center group'>
                        <img
                            className='w-8 h-8 rounded-full'
                            src={userIcon}
                            width='32'
                            height='32'
                            alt='User'
                        />
                    </Popover.Button>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'>
                        <Popover.Panel
                            className='origin-top-right w-48 z-10 absolute top-full
                             right-0 w-58 bg-white border border-gray-200
                              rounded shadow-lg overflow-hidden'>
                            <div>
                                <div className='border-b border-gray-200'>
                                    <button
                                        className='flex flex-col items-start w-full text-md
                                        hover:bg-gray-50 hover:text-indigo-600 px-4 py-2 rounded-md'>
                                        <span className='font-semibold'>{userName}</span>
                                        <span className='text-sm text-gray-500'>@{userName}</span>
                                    </button>
                                </div>

                                <Link href='/dash/home'>
                                    <button
                                        className='flex flex-col items-start w-full text-md
                                     hover:bg-gray-50 hover:text-indigo-600 px-4 py-2 rounded-md'>
                                        Home
                                    </button>
                                </Link>

                                <Link href='/dash/new'>
                                    <button
                                        className='flex flex-col items-start w-full text-md
                                     hover:bg-gray-50 hover:text-indigo-600 px-4 py-2 rounded-md'>
                                        Create New
                                    </button>
                                </Link>

                                <Link href='/dash/home'>
                                    <button
                                        className='flex flex-col items-start w-full text-md
                                     hover:bg-gray-50 hover:text-indigo-600 px-4 py-2 rounded-md'>
                                        Settings
                                    </button>
                                </Link>

                                <div className='border-t border-gray-200 py-1'>
                                    <Logout />
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};
