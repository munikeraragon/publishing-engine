import React, { useState } from 'react';
import Link from 'next/link';
import { WaitForAuth } from '../modules/auth/WaitForAuth';
import { useSaveTokensFromQuery } from '../modules/auth/useSaveTokensFromQuery';
import { SidebarWrapper } from '../ui/wrappers/SidebarWrapper';
import { Navbar } from '../ui/navbar/Navbar';
import { UserMenu } from '../ui/navbar/UserMenu';
import { useGetUserQuery } from '../generated/apolloComponents';

export const DashboardLayout: React.FC = ({ children }) => {
    useSaveTokensFromQuery();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { data } = useGetUserQuery();

    const contentRight = (
        <>
            <Link href='/dash/new'>
                <span
                    className='ml-8 whitespace-nowrap inline-flex items-center justify-center
                    px-4 py-2 border border-transparent rounded-md shadow-sm text-sm
                    font-semibold text-white bg-indigo-500 hover:bg-indigo-600 mr-4'>
                    Create New
                </span>
            </Link>
            <hr className='w-px h-6 bg-gray-200 mx-2' />
            <UserMenu userIcon={data?.getUser.userIcon} userName={data?.getUser.userName} />
        </>
    );

    return (
        <WaitForAuth>
            <div className='flex h-screen overflow-hidden bg-gray-50'>
                <SidebarWrapper open={sidebarOpen} setOpen={setSidebarOpen} />
                <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                    <Navbar className='sticky shadow' contentRight={contentRight} />
                    <main className='h-full flex overflow-y-scroll'>{children}</main>
                </div>
            </div>
        </WaitForAuth>
    );
};
