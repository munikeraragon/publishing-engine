import { useState } from 'react';
import { WaitForAuth } from '../modules/auth/WaitForAuth';
import { useSaveTokensFromQuery } from '../modules/auth/useSaveTokensFromQuery';
import { Sidebar } from '../ui/sidebar/Sidebar';
import { Header } from '../ui/header/Header';

export const DashboardLayout: React.FC = ({ children }) => {
    useSaveTokensFromQuery();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <WaitForAuth>
            <div className='flex h-screen bg-gray-50 overflow-hidden'>
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
                <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main className='h-full flex'>{children}</main>
                </div>
            </div>
        </WaitForAuth>
    );
};
