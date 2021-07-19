import { Header } from '../ui/header/Header';

export const SinglePublicLayout: React.FC = ({ children }) => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                <Header
                    sidebarOpen={false}
                    setSidebarOpen={() => null}
                />
                <div className='h-full'>{children}</div>
            </div>
        </div>
    );
};
