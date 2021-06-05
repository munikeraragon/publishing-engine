export interface LoginCardProps {
    className?: string;
    buttons: LoginCardButton[];
    privacyHref: string;
    termsHref: string;
}

export interface LoginCardButton {
    href: string;
    icon: JSX.Element;
    label: string;
}

export const LoginCard: React.FC<LoginCardProps> = ({
    className = '',
    buttons,
    privacyHref,
    termsHref
}) => {
    return (
        <div
            data-aos='fade-up'
            className={`${className} flex mx-4 my-20 md:m-auto flex-col bg-white p-10 
                        gap-6 bg-primary-800 sm:rounded-md z-10 sm:max-w-sm shadow-lg`}>
            <div className='flex gap-2 flex-col'>
                <span className='text-3xl font-bold'>Welcome</span>
                <div className='flex-wrap'>
                    By logging in you accept our
                    <a href={privacyHref} className='text-indigo-600 hover:underline'>
                        {' '}
                        Privacy Policy{' '}
                    </a>
                    and
                    <a href={termsHref} className='text-indigo-600 hover:underline'>
                        {' '}
                        Terms of Service
                    </a>
                    .
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                {buttons.map((b: LoginCardButton, index: number) => (
                    <a href={b.href} key={index}>
                        <div className='flex justify-center py-3 bg-indigo-500 hover:bg-gray-700 text-white rounded-md mt-2'>
                            {b.icon}
                            <span className='ml-2 font-bold'>{b.label}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
