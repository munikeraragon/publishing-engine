import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

export const Help: React.FC = () => {
    return (
        <Popover className='relative inline-flex ml-3'>
            {({ open }) => (
                <>
                    <Popover.Button
                        className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ${
                            open && 'bg-gray-200'
                        }`}>
                        <span className='sr-only'>Notifications</span>
                        <span className='sr-only'>Need help?</span>
                        <svg
                            className='w-4 h-4'
                            viewBox='0 0 16 16'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                className='fill-current text-gray-500'
                                d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z'
                            />
                        </svg>
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
                            <div className='text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4'>
                                Need help?
                            </div>
                            <ul>
                                <li>
                                    <div className='font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3'>
                                        <svg
                                            className='w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2'
                                            viewBox='0 0 12 12'>
                                            <rect y='3' width='12' height='9' rx='1' />
                                            <path d='M2 0h8v2H2z' />
                                        </svg>
                                        <span>Documentation</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3'>
                                        <svg
                                            className='w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2'
                                            viewBox='0 0 12 12'>
                                            <path d='M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z' />
                                        </svg>
                                        <span>Support Site</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3'>
                                        <svg
                                            className='w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2'
                                            viewBox='0 0 12 12'>
                                            <path d='M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z' />
                                        </svg>
                                        <span>Contact us</span>
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
