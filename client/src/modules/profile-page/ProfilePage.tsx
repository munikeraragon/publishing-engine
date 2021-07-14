import { useGetUserQuery } from '../../generated/apolloComponents';
import { DashboardLayout } from '../../layouts/dash-auth';

export const ProfilePage: React.FC = () => {
    const { data, loading, error } = useGetUserQuery();

    return (
        <div>
            {loading && 'Loading'}
            {error && 'error'}
            {JSON.stringify(data)}
        </div>
    );
};

(ProfilePage as any).layout = DashboardLayout;
