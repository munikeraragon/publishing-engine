export interface LoginFooterProps {
    className?: string;
    label: string;
    privacyHref: string;
    reportHref: string;
    githubHref: string;
}

export const LoginFooter: React.FC<LoginFooterProps> = ({
    className = '',
    label,
    privacyHref,
    reportHref,
    githubHref
}) => {
    return (
        <div
            className={`${className} flex flex-row absolute bottom-0 w-full
                         justify-between px-5 py-5 mt-auto items-center sm:px-7`}>
            <div className='hidden sm:flex'>
                <span className='text-2xl hover:text-indigo-600 text-gray-600 font-bold ml-2'>
                    {label}
                </span>
            </div>

            <div className='flex flex-row gap-6 text-gray-700 text-md'>
                <a href={privacyHref} className='hover:text-indigo-700 '>
                    Privacy policy
                </a>

                <a href={reportHref} className='hover:text-indigo-700'>
                    Report a bug
                </a>

                <a href={githubHref} className='hover:text-indigo-700'>
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
    );
};
