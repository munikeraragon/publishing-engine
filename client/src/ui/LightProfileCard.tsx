export interface ProfileCardProps {
    userIcon: string | undefined;
    userName: string | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ userIcon, userName, className = '' }) => {
    if (!userIcon || !userName) return <ProfileCardEskeleton className={className} />;
    return (
        <div
            className={`px-6 py-4 text-gray-900 rounded-lg ${className}`}
            style={{
                border: 'solid 2px rgb(95, 95, 96)',
                boxShadow: 'rgb(95, 95, 96) 4px 4px 0px 0px',
                background: 'rgb(251, 251, 252)'
            }}>
            <div className='space-y-4 xl:space-y-6'>
                <img src={userIcon} alt='user profile' className='w-36 h-36 mx-auto rounded-full' />

                <div className='space-y-2'>
                    <div className='flex justify-center items-center flex-col space-y-3 text-lg leading-6'>
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>

            <div className='mb-2'>
                <h3 className='text-sm text-gray-500 font-medium'>Work</h3>
                <p>--------------------------</p>
            </div>

            <div className='mb-2'>
                <h3 className='text-sm text-gray-500 font-medium'>Location</h3>
                <p>------------</p>
            </div>

            <div className='mb-2'>
                <h3 className='text-sm text-gray-500 font-medium'>Joined</h3>
                <p>Nov 16, 2020</p>
            </div>
            <div className='text-center'>
                <button
                    className='bg-gray-800 hover:bg-gray-900 text-white
             font-medium rounded-md  py-1.5 px-8'>
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
