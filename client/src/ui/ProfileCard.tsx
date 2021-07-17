export interface ProfileCardProps {
    userIcon: string | undefined;
    userName: string | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ userIcon, userName, className = '' }) => {
    if (!userIcon || ! userName) return <ProfileCardEskeleton className={className}/>
    return (
        <div
            className={`px-6 py-10 text-center rounded-lg shadow-md ${className}`}>
            <div className='space-y-4 xl:space-y-6'>
                <img src={userIcon} className='w-40 h-40 mx-auto rounded-full' />
                <div className='space-y-2'>
                    <div className='flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6'>
                        <h3 className='text-gray-600'>{userName}</h3>
                        <p className='text-indigo-500'>Web Dev</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ProfileCardEskeleton: React.FC<EskeletonProps> = ({className}) => {
    return (
        <div
            data-aos='fade-up'
            className={`px-6 py-10 text-center rounded-lg shadow-md ${className}`}>
            <div className='space-y-4 xl:space-y-6'>
                <div className='w-40 h-40 mx-auto rounded-full bg-gray-300 animate-pulse' />
                <div className='space-y-2'>
                    <div className='flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6'>
                     <span className='w-32 h-2 bg-gray-300 animate-pulse rounded-md my-1'/>
                     <span className='w-20 h-2 bg-gray-300 animate-pulse rounded-md my-1'/>
                    </div>
                </div>
            </div>
        </div>
    );
};
