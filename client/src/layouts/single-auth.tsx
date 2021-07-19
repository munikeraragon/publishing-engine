import { WaitForAuth } from '../modules/auth/WaitForAuth';
import { useSaveTokensFromQuery } from '../modules/auth/useSaveTokensFromQuery';

export const SingleAuthLayout: React.FC = ({ children }) => {
    useSaveTokensFromQuery();

    return (
        <WaitForAuth>
            <div className='flex h-screen overflow-hidden'>
                <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                    <main className='flex h-full'>{children}</main>
                </div>
            </div>
        </WaitForAuth>
    );
};
