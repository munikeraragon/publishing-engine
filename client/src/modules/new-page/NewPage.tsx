import { DashboardLayout } from '../../layouts/dash-auth';
import { PostForm } from '../../ui/post-form/PostForm';

export const NewPostPage: React.FC = () => {
    return <PostForm />;
};

(NewPostPage as any).layout = DashboardLayout;
