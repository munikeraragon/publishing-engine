import { useTokenStore } from '../modules/auth/useTokenStore';
import { Header } from '../ui/header/Header';
import { Navbar } from '../ui/navbar/Navbar';

export const SinglePublicLayout: React.FC = ({ children }) => {
    const hasTokens = useTokenStore((s) => !!(s.accessToken && s.refreshToken));

    return (
        <div className='flex h-screen overflow-hidden'>
            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                {hasTokens ? (
                    <Header sidebarOpen={false} setSidebarOpen={() => null} />
                ) : (
                    <div>
                        <Navbar />
                    </div>
                )}
                <div className='h-full'>{children}</div>
            </div>
        </div>
    );
};
