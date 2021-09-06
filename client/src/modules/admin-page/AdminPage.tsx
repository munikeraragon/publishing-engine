import { DashboardLayout } from '../../layouts/dash-auth';
import { useGetAdminInsightQuery, useGetAllPostsQuery } from '../../generated/apolloComponents';
import { useEffect, useState } from 'react';
import { User, UserGrid } from './UserGrid';
import { Message, MessageGrid } from './MessageGrid';
import { PostGrid, Post } from './PostGrid';

export const AdminPage: React.FC = () => {
    const { data } = useGetAdminInsightQuery();
    const { data: postdata } = useGetAllPostsQuery();

    const [selected, setSelected] = useState('users');
    const [users, setUsers] = useState<User[]>([]);
    const [contactMessages, setContactMessages] = useState<Message[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        if (data?.getAdminInsight.userInsight.users) {
            setUsers(data.getAdminInsight.userInsight.users);
        }

        if (data?.getAdminInsight.contactMessageInsight.contactMessages) {
            setContactMessages(data.getAdminInsight.contactMessageInsight.contactMessages);
        }
    }, [data]);

    useEffect(() => {
        if (postdata?.getAllPosts) {
            setPosts(postdata.getAllPosts);
        }
    }, [postdata]);

    return (
        <div className='w-full mx-auto my-8'>
            <div className='flex flex-col  mx-8 h-full'>
                <div className='grid grid-cols-4 gap-8'>
                    <button
                        onClick={() => setSelected('users')}
                        className={`${selected === 'users' ? 'text-indigo-500' : ''}
                        flex flex-col py-6 shadow-md bg-white 
                        text-center rounded-md text-gray-500 col-span-1`}>
                        <span className='text-4xl font-semibold'>
                            {data?.getAdminInsight.userInsight.totalUsers}
                        </span>
                        Users
                    </button>

                    <button
                        onClick={() => setSelected('messages')}
                        className={`${selected === 'messages' ? 'text-indigo-500' : ''}
                        flex flex-col py-6 shadow-md bg-white 
                        text-center rounded-md text-gray-500 col-span-1`}>
                        <span className='text-4xl font-semibold'>
                            {data?.getAdminInsight.contactMessageInsight.totalMessages}
                        </span>
                        Messages
                    </button>

                    <button
                        onClick={() => setSelected('posts')}
                        className={`${selected === 'posts' ? 'text-indigo-500' : ''}
                        flex flex-col py-6 shadow-md bg-white 
                        text-center rounded-md text-gray-500 col-span-1`}>
                        <span className='text-3xl font-semibold'>
                            {data?.getAdminInsight.postInsight.totalPosts}
                        </span>
                        Posts
                    </button>

                    <button
                        className='flex flex-col py-6 shadow-md bg-white
                    text-center rounded-md text-gray-500 ol-span-1'>
                        <span className='text-3xl font-semibold'> N/A</span>
                        Views
                    </button>
                </div>

                <div className='bg-white shadow-md mt-10  h-full'>
                    {selected === 'users' && <UserGrid users={users} />}
                    {selected === 'messages' && <MessageGrid messages={contactMessages} />}
                    {selected === 'posts' && <PostGrid posts={posts} />}
                </div>
            </div>
        </div>
    );
};

(AdminPage as any).layout = DashboardLayout;
