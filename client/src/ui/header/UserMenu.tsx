import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

export interface UserMenuProps {
    userIcon: string | undefined;
}

export const UserMenu: React.FC<UserMenuProps> = ({ userIcon }) => {
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
                        <div className='flex items-center truncate'>
                            <svg
                                className='ml-2 w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400'
                                viewBox='0 0 12 12'>
                                <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                        </div>
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
                        <Popover.Panel className='origin-top-right z-10 absolute top-full right-0 w-58 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1'>
                            <div>
                                <div className='pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200'>
                                    <div className='font-medium text-gray-800'>Acme Inc.</div>
                                    <div className='text-xs text-gray-500 italic'>
                                        Administrator
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div className='font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3'>
                                            Settings
                                        </div>
                                    </li>
                                    <li>
                                        <div className='font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3'>
                                            Sign Out
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};
