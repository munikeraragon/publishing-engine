import { useState } from 'react';
import { useTokenStore } from '../modules/auth/useTokenStore';
import { Header } from '../ui/header/Header';
import { Navbar } from '../ui/navbar/Navbar';

export const SinglePublicLayout: React.FC = ({ children }) => {
    const hasTokens = useTokenStore((s) => !!(s.accessToken && s.refreshToken));
    const [open, setOpen] = useState(false);

    return (
        <div className='flex h-screen'>
            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                {hasTokens ? (
                    <Header sidebarOpen={open} setSidebarOpen={setOpen} />
                ) : (
                    <div>
                        <Navbar className='sticky' />
                    </div>
                )}
                <div className='h-full overflow-y-scroll'>{children}</div>
            </div>
        </div>
    );
};
