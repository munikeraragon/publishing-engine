import { useGetUserQuery } from '../../generated/apolloComponents';
import { WaitForAuth } from '../auth/WaitForAuth';

export const UserPage: React.FC = () => {
    const { data, loading, error } = useGetUserQuery()
    
    return (
        <WaitForAuth>
            {loading && 'Loading'}
            <div className='pt-20'>{JSON.stringify(data)}</div>
        </WaitForAuth>
    );
};

  