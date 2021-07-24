import { SingleAuthLayout } from '../../layouts/single-auth';
import { PostForm } from '../../ui/post-form/PostForm';

export const NewPostPage: React.FC = () => {
    return (
        <div className='flex max-w-7xl md:ml-8 lg:ml-auto md:mr-10'>
            <PostForm />
        </div>
    );
};

(NewPostPage as any).layout = SingleAuthLayout;
