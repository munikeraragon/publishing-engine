import { useState } from 'react';
import { WaitForAuth } from '../modules/auth/WaitForAuth';
import { useSaveTokensFromQuery } from '../modules/auth/useSaveTokensFromQuery';
import { Header } from '../ui/header/Header';
import { SidebarWrapper } from '../ui/wrappers/SidebarWrapper';

export const DashboardLayout: React.FC = ({ children }) => {
    useSaveTokensFromQuery();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <WaitForAuth>
            <div className='flex h-screen overflow-hidden bg-gray-50'>
                <SidebarWrapper open={sidebarOpen} setOpen={setSidebarOpen} />
                <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main className='h-full flex overflow-y-scroll'>{children}</main>
                </div>
            </div>
        </WaitForAuth>
    );
};
