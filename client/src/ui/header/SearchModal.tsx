import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useRef } from 'react';

export const SearchModal: React.FC = () => {
    const [open, setOpen] = useState(false);
    const searchInput = useRef<HTMLInputElement>(null);

    return (
        <>
            <button
                className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ml-3 ${
                    open && 'bg-gray-200'
                }`}
                type='button'
                onClick={() => setOpen(true)}>
                <span className='sr-only'>Search</span>
                <svg className='w-4 h-4' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        className='fill-current text-gray-500'
                        d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z'
                    />
                    <path
                        className='fill-current text-gray-400'
                        d='M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z'
                    />
                </svg>
            </button>
            <Transition appear show={open} as={Fragment}>
                <Dialog
                    as='div'
                    className='absolute inset-0 z-10 overflow-hidden top-20 mb-4'
                    onClose={() => setOpen(false)}>
                    <div className='min-h-screen px-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'>
                            <Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-30 transition-opacity' />
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter='transition ease-in-out duration-200'
                            enterFrom='opacity-0 translate-y-4'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in-out duration-200'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-4'
                            appear>
                            <div className='inline-block  max-w-2xl w-full max-h-full  text-left align-middle transition-all transform bg-white shadow-lg rounded'>
                                <form className='w-full border-b border-gray-200'>
                                    <div className='relative'>
                                        <label htmlFor='modal-search' className='sr-only'>
                                            Search
                                        </label>
                                        <input
                                            id='modal-search'
                                            className='w-full border-0 focus:ring-transparent placeholder-gray-400 appearance-none py-3 pl-10 pr-4'
                                            type='search'
                                            placeholder='Search Anything…'
                                            ref={searchInput}
                                        />
                                        <button
                                            className='absolute inset-0 right-auto group'
                                            type='submit'
                                            aria-label='Search'>
                                            <svg
                                                className='w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2'
                                                viewBox='0 0 16 16'
                                                xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z' />
                                                <path d='M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z' />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                                <div className='py-4 px-2'>
                                    {/* Recent searches */}
                                    <div className='mb-3'>
                                        <div className='text-xs font-semibold text-gray-400 uppercase px-2 mb-2'>
                                            Recent searches
                                        </div>
                                        <ul className='text-sm'>
                                            <li>
                                                <div className='flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group'>
                                                    <svg
                                                        className='w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3'
                                                        viewBox='0 0 16 16'>
                                                        <path d='M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z' />
                                                    </svg>
                                                    <span>
                                                        Form Builder - 23 hours on-demand video
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group'>
                                                    <svg
                                                        className='w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3'
                                                        viewBox='0 0 16 16'>
                                                        <path d='M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z' />
                                                    </svg>
                                                    <span>Access Mosaic on mobile and TV</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group'>
                                                    <svg
                                                        className='w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3'
                                                        viewBox='0 0 16 16'>
                                                        <path d='M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z' />
                                                    </svg>
                                                    <span>Product Update - Q4 2021</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group'>
                                                    <svg
                                                        className='w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3'
                                                        viewBox='0 0 16 16'>
                                                        <path d='M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z' />
                                                    </svg>
                                                    <span>
                                                        Master Digital Marketing Strategy course
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group'>
                                                    <svg
                                                        className='w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3'
                                                        viewBox='0 0 16 16'>
                                                        <path d='M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z' />
                                                    </svg>
                                                    <span>Dedicated forms for products</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group'>
                                                    <svg
                                                        className='w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3'
                                                        viewBox='0 0 16 16'>
                                                        <path d='M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z' />
                                                    </svg>
                                                    <span>Product Update - Q4 2021</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Recent pages */}
                                    <div className='mb-3'>
                                        <div className='text-xs font-semibold text-gray-400 uppercase px-2 mb-2'>
                                            Recent pages
                                        </div>
                                        <ul className='text-sm'>
                                            <li>
                                                <div className='flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group'>
                                                    <svg
                                                        className='w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3'
                                                        viewBox='0 0 16 16'>
                                                        <path d='M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z' />
                                                    </svg>
                                                    <span>
                                                        <span className='font-medium text-gray-800 group-hover:text-white'>
                                                            Messages
                                                        </span>{' '}
                                                        - Conversation / … / Mike Mills
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group'>
                                                    <svg
                                                        className='w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3'
                                                        viewBox='0 0 16 16'>
                                                        <path d='M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z' />
                                                    </svg>
                                                    <span>
                                                        <span className='font-medium text-gray-800 group-hover:text-white'>
                                                            Messages
                                                        </span>{' '}
                                                        - Conversation / … / Eva Patrick
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};