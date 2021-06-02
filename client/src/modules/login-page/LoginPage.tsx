export const LoginPage = () => {
    return (
        <div className='grid w-full h-full bg-gray-100'>
            <div className='flex mx-4 my-20 md:m-auto flex-col bg-white p-10 gap-6 bg-primary-800 sm:rounded-md z-10 sm:max-w-sm shadow-lg'>
                <div className='flex gap-2 flex-col'>
                    <span className='text-3xl font-bold'>Welcome</span>
                    <div className='flex-wrap'>
                        By logging in you accept our
                        <a className='text-indigo-600 hover:underline'> Privacy Policy </a>
                        and
                        <a className='text-indigo-600 hover:underline'> Terms of Service</a>.
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <a href='http://localhost:5000/auth/google'>
                        <div className='flex justify-center py-3 bg-indigo-500 hover:bg-gray-700 text-white rounded-md mt-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                shape-rendering='geometricPrecision'
                                text-rendering='geometricPrecision'
                                image-rendering='optimizeQuality'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                fill='currentColor'
                                viewBox='0 0 640 640'>
                                <path d='M326.331 274.255v109.761h181.49c-7.37 47.115-54.886 138.002-181.49 138.002-109.242 0-198.369-90.485-198.369-202.006 0-111.509 89.127-201.995 198.369-201.995 62.127 0 103.761 26.516 127.525 49.359l86.883-83.635C484.99 31.512 412.741-.012 326.378-.012 149.494-.012 6.366 143.116 6.366 320c0 176.884 143.128 320.012 320.012 320.012 184.644 0 307.256-129.876 307.256-312.653 0-21-2.244-36.993-5.008-52.997l-302.248-.13-.047.024z' />
                            </svg>
                            <span className='ml-2 font-bold'>Log in with Google</span>
                        </div>
                    </a>

                    <a href='http://localhost:5000/auth/github'>
                        <div className='flex justify-center py-3 bg-indigo-500 hover:bg-gray-700 text-white rounded-md mt-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='currentColor'
                                viewBox='0 0 24 24'>
                                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                            </svg>

                            <span className='ml-2 font-bold'>Log in with GitHub</span>
                        </div>
                    </a>

                    <a href='http://localhost:5000/auth/facebook'>
                        <div className='flex justify-center py-3 bg-indigo-500 hover:bg-gray-700 text-white rounded-md mt-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='currentColor'
                                viewBox='0 0 24 24'>
                                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                            </svg>

                            <span className='ml-2 font-bold'>Log in with Facebook</span>
                        </div>
                    </a>

                    <a href='http://localhost:5000/auth/discord'>
                        <div className='flex justify-center py-3 bg-indigo-500 hover:bg-gray-700 text-white rounded-md mt-2'>
                            <svg
                                width='24'
                                height='24'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                fill-rule='evenodd'
                                clip-rule='evenodd'>
                                <path d='M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z' />
                            </svg>

                            <span className='ml-2 font-bold'>Log in with Discord</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className='flex flex-row absolute bottom-0 w-full justify-between px-5 py-5 mt-auto items-center sm:px-7'>
                <div className='hidden sm:flex'>
                    <span className='text-2xl hover:text-indigo-600 text-gray-600 font-bold ml-2'>
                        CodeGrow
                    </span>
                </div>

                <div className='flex flex-row gap-6 text-gray-700 text-md'>
                    <a className='hover:text-indigo-700 '>Privacy policy</a>

                    <a className='hover:text-indigo-700'>Report a bug</a>

                    <a href="https://github.com/munikeraragon/blog" className='hover:text-indigo-700'>
                        <div className='flex flex-row gap-6 sm:gap-4'>
                            <svg
                                width='22'
                                height='22'
                                viewBox='0 0 16 16'
                                fill='currentColor'
                                xmlns='http://www.w3.org/2000/svg'>
                                <g clip-path='url(#clip0)'>
                                    <path
                                        fill-rule='evenodd'
                                        clip-rule='evenodd'
                                        d='M8 0C12.4184 0 16 3.67194 16 8.20234C16 11.8255 13.7104 14.8992 10.5336 15.9848C10.128 16.0656 9.984 15.8094 9.984 15.591C9.984 15.3206 9.9936 14.4374 9.9936 13.3398C9.9936 12.575 9.7376 12.0759 9.4504 11.8215C11.232 11.6183 13.104 10.9246 13.104 7.77422C13.104 6.87822 12.7936 6.14706 12.28 5.57266C12.3632 5.36546 12.6376 4.53116 12.2016 3.40156C12.2016 3.40156 11.5312 3.18178 10.004 4.24258C9.35149 4.0607 8.67738 3.96769 8 3.96641C7.32314 3.96763 6.64956 4.06064 5.9976 4.24258C4.4688 3.18178 3.7968 3.40156 3.7968 3.40156C3.3624 4.53116 3.6368 5.36546 3.7192 5.57266C3.208 6.14706 2.8952 6.87822 2.8952 7.77422C2.8952 10.9166 4.7632 11.6209 6.54 11.8281C6.3112 12.0329 6.104 12.3942 6.032 12.9246C5.576 13.1342 4.4176 13.497 3.704 12.2434C3.704 12.2434 3.2808 11.4553 2.4776 11.3977C2.4776 11.3977 1.6976 11.3873 2.4232 11.8961C2.4232 11.8961 2.9472 12.1481 3.3112 13.0961C3.3112 13.0961 3.7808 14.5601 6.0064 14.0641C6.0104 14.7497 6.0176 15.3958 6.0176 15.591C6.0176 15.8078 5.8704 16.0615 5.4712 15.9855C2.292 14.9015 0 11.8263 0 8.20234C0 3.67194 3.5824 0 8 0'></path>
                                </g>
                                <defs>
                                    <clipPath id='clip0'>
                                        <rect width='16' height='16'></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
