import { Navbar } from '../ui/navbar/Navbar';

export const SinglePublicLayout: React.FC = ({ children }) => {
    return (
        <div className='flex h-screen bg-gray-50 overflow-hidden'>
            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                <Navbar />
                <main className='h-full'>{children}</main>
            </div>
        </div>
    );
};
