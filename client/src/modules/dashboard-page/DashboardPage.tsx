import { useState } from 'react';
import { WaitForAuth } from '../auth/WaitForAuth';
import { Sidebar } from '../../ui/Sidebar/Sidebar';
import { UserPage } from '../user-page/UserPage';
import { useSaveTokensFromQuery } from '../auth/useSaveTokensFromQuery';

type ComponentOptions =
    | 'dashboard'
    | 'customers'
    | 'orders'
    | 'campaigns'
    | 'team'
    | 'tasks'
    | 'applications'
    | 'settings'
    | 'messages';

const componentStore = {
    'dashboard': <UserPage />,
    'customers': <UserPage />,
    'orders': <UserPage />,
    'campaigns': <UserPage />,
    'team': <UserPage />,
    'tasks': <UserPage />,
    'applications': <UserPage />,
    'settings': <UserPage />,
    'messages': <UserPage />
}

export const DashboardPage = () => {
    useSaveTokensFromQuery();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [component, setComponent] = useState<ComponentOptions>('dashboard');

    return (
        <WaitForAuth>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar
                    component={component}
                    setComponent={setComponent}
                    open={sidebarOpen}
                    setOpen={setSidebarOpen}
                />
                <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                    <main>
                        <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
                            Rendered coponent: {component}
                            {componentStore[component]}
                        </div>
                    </main>
                </div>
            </div>
        </WaitForAuth>
    );
};
