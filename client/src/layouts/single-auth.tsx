import { useState } from 'react';
import { WaitForAuth } from '../modules/auth/WaitForAuth';
import { useSaveTokensFromQuery } from '../modules/auth/useSaveTokensFromQuery';
import { Header } from '../ui/header/Header';

export const SingleAuthLayout: React.FC = ({ children }) => {
    useSaveTokensFromQuery();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <WaitForAuth>
            <div className='flex h-screen overflow-hidden'>
                <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main className='h-full'>{children}</main>
                </div>
            </div>
        </WaitForAuth>
    );
};
