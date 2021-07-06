import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

export const Notifications: React.FC = () => {
    return (
        <Popover className='relative inline-flex ml-3'>
            {({ open }) => (
                <>
                    <Popover.Button
                        className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ${
                            open && 'bg-gray-200'
                        }`}>
                        <span className='sr-only'>Notifications</span>
                        <svg
                            className='w-4 h-4'
                            viewBox='0 0 16 16'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                className='fill-current text-gray-500'
                                d='M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z'
                            />
                            <path
                                className='fill-current text-gray-400'
                                d='M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z'
                            />
                        </svg>
                        <div className='absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full'></div>
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
                        <Popover.Panel className='origin-top-right z-10 absolute top-full right-0 w-80 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1'>
                            <div className='text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4'>
                                Notifications
                            </div>
                            <ul>
                                <li className='border-gray-200 '>
                                    <div className='block py-2 px-4 hover:bg-gray-50'>
                                        <span className='block text-sm mb-2'>
                                            <span role='img' aria-label=''>
                                                📣
                                            </span>
                                            <span className='font-medium text-gray-800'>
                                                Edit your information in a swipe
                                            </span>{' '}
                                            Sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt mollit anim.
                                        </span>
                                        <span className='block text-xs font-medium text-gray-400'>
                                            Feb 12, 2021
                                        </span>
                                    </div>
                                </li>
                                <li className='border-b border-gray-200 last:border-0'>
                                    <div className='block py-2 px-4 hover:bg-gray-50'>
                                        <span className='block text-sm mb-2'>
                                            <span className='font-medium text-gray-800'>
                                                Edit your information in a swipe
                                            </span>{' '}
                                            Sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt mollit anim.
                                        </span>
                                        <span className='block text-xs font-medium text-gray-400'>
                                            Feb 9, 2021
                                        </span>
                                    </div>
                                </li>
                                <li className='border-b border-gray-200 last:border-0'>
                                    <div className='block py-2 px-4 hover:bg-gray-50'>
                                        <span className='block text-sm mb-2'>
                                            <span role='img' aria-label=''>
                                                🚀
                                            </span>
                                            <span className='font-medium text-gray-800'>
                                                Say goodbye to paper receipts!
                                            </span>
                                            Sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt mollit anim.
                                        </span>
                                        <span className='block text-xs font-medium text-gray-400'>
                                            Jan 24, 2020
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};
