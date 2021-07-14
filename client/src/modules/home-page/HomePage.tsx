import { DashboardLayout } from '../../layouts/dash-auth';

export const HomePage: React.FC = () => {
    return <div>Home Page</div>;
};

(HomePage as any).layout = DashboardLayout;
