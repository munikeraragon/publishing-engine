import Link from 'next/link';
import { useGetUserQuery } from '../generated/apolloComponents';
import { useTokenStore } from '../modules/auth/useTokenStore';
import { Navbar } from '../ui/navbar/Navbar';
import { UserMenu } from '../ui/navbar/UserMenu';

export const SinglePublicLayout: React.FC = ({ children }) => {
    const hasTokens = useTokenStore((s) => !!(s.accessToken && s.refreshToken));
    const { data } = useGetUserQuery();

    const contentRightWithAuth = (
        <>
            <Link href='/dash/new'>
                <span
                    className='ml-8 whitespace-nowrap inline-flex items-center justify-center
                    px-4 py-2 border border-transparent rounded-md shadow-sm text-sm
                    font-medium text-white bg-indigo-600 hover:bg-indigo-700 mr-4'>
                    Create New
                </span>
            </Link>
            <hr className='w-px h-6 bg-gray-200 mx-2' />
            <UserMenu userIcon={data?.getUser.userIcon} userName={data?.getUser.userName} />
        </>
    );

    const contentLeft = (
        <>
            <Link href='/#posts'>
                <p className='text-lg text-gray-700 hover:text-indigo-500'>Posts</p>
            </Link>

            <Link href='/#contact'>
                <p className='text-lg text-gray-700 hover:text-indigo-500'>Contact</p>
            </Link>
        </>
    );

    const contentRight = (
        <Link href='/login'>
            <span
                className='ml-8 whitespace-nowrap inline-flex items-center justify-center
                    px-4 py-2 border border-transparent rounded-md shadow-sm text-sm
                    font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                Log in
            </span>
        </Link>
    );

    return (
        <div className='flex h-screen'>
            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                {hasTokens ? (
                    <div>
                        <Navbar className='sticky' contentRight={contentRightWithAuth} />
                    </div>
                ) : (
                    <div>
                        <Navbar
                            className='sticky'
                            contentRight={contentRight}
                            contentLeft={contentLeft}
                        />
                    </div>
                )}
                <div className='h-full overflow-y-scroll'>{children}</div>
            </div>
        </div>
    );
};
