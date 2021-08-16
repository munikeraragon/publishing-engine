export interface ProfileCardProps {
    userIcon: string | undefined;
    userName: string | undefined;
    creationDate: string | undefined;
    location: string | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
    userIcon,
    userName,
    creationDate,
    location,
    className = ''
}) => {
    if (!userIcon || !userName || !creationDate || !location)
        return <ProfileCardEskeleton className={className} />;
    return (
        <div
            className={`${className} bg-white px-6 pt-4 text-gray-800 border border-gray-500 rounded-lg`}
            style={{ boxShadow: 'rgb(113, 113, 123) 4px 4px 0px 0px' }}>
            <div className='space-y-4 xl:space-y-6'>
                <img src={userIcon} alt='user profile' className='w-32 h-32 mx-auto rounded-full' />

                <div className='space-y-2'>
                    <div className='flex justify-center items-center flex-col space-y-3 text-lg leading-6'>
                        <h3>@{userName}</h3>
                    </div>
                </div>
            </div>

            <div className='mb-1'>
                <h3 className='text-sm text-indigo-500 font-medium'>Work</h3>
                <p>--------------------------</p>
            </div>

            <div className='mb-1'>
                <h3 className='text-sm text-indigo-500 font-medium'>Location</h3>
                <p>{location}</p>
            </div>

            <div className='mb-1'>
                <h3 className='text-sm text-indigo-500 font-medium'>Joined</h3>
                <p>{creationDate}</p>
            </div>
            <div className='text-center mt-2 mb-3'>
                <button
                    className='flex justify-center items-center border rounded-md
                    text-gray-600 border-gray-500 hover:border-indigo-600 hover:text-indigo-600
                    px-6 py-1 mx-auto'>
                    Follow
                </button>
            </div>
        </div>
    );
};

export const ProfileCardEskeleton: React.FC<EskeletonProps> = ({ className }) => {
    return (
        <div className={`px-6 py-10 text-center rounded-lg shadow-md ${className}`}>
            <div className='space-y-4 xl:space-y-6'>
                <div className='w-40 h-40 mx-auto rounded-full bg-gray-300 animate-pulse' />
                <div className='space-y-2'>
                    <div className='flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6'>
                        <span className='w-32 h-2 bg-gray-300 animate-pulse rounded-md my-1' />
                        <span className='w-20 h-2 bg-gray-300 animate-pulse rounded-md my-1' />
                    </div>
                </div>
            </div>
        </div>
    );
};
