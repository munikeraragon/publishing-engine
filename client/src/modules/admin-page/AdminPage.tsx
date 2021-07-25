import { DashboardLayout } from '../../layouts/dash-auth';
import { useGetTotalPostsQuery, useGetTotalUsersQuery } from '../../generated/apolloComponents';

export const AdminPage: React.FC = () => {
    const { data: userInsight } = useGetTotalUsersQuery();
    const { data: postInsight } = useGetTotalPostsQuery();

    return (
        <div className='w-full mx-auto mt-8'>
            <div className='grid grid-cols-4 gap-8 max-w-5xl mx-auto'>
                <div
                    className='flex flex-col py-6 shadow-md bg-white 
                    text-center rounded-md text-gray-600 col-span-1'>
                    <span className='text-3xl font-semibold'>{userInsight?.getTotalUsers}</span>
                    Users
                </div>

                <div
                    className='flex flex-col py-6 shadow-md bg-white
                    text-center rounded-md text-gray-600 col-span-1'>
                    <span className='text-3xl font-semibold'>{postInsight?.getTotalPosts}</span>
                    Posts
                </div>

                <div
                    className='flex flex-col py-6 shadow-md bg-white
                    text-center rounded-md text-gray-600 ol-span-1'>
                    <span className='text-3xl font-semibold'> N/A</span>
                    Views
                </div>

                <div
                    className='flex flex-col py-6 shadow-md bg-white
                    text-center rounded-md text-gray-600 ol-span-1'>
                    <span className='text-3xl font-semibold'> N/A</span>
                    Likes
                </div>
            </div>
        </div>
    );
};

(AdminPage as any).layout = DashboardLayout;
