import { useSaveTokensFromQuery } from '../auth/useSaveTokensFromQuery';
import { WaitForAuth } from '../auth/WaitForAuth';

export const UserPage: React.FC = () => {
    useSaveTokensFromQuery();

    return (
        <WaitForAuth>
            <div className='pt-20'>user</div>
        </WaitForAuth>
    );
};
