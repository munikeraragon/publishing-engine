import { DashboardLayout } from '../../layouts/dash-auth';
import { useGetAdminInsightQuery } from '../../generated/apolloComponents';
import { useEffect, useState } from 'react';
import { User, UserGrid } from './UserGrid';
import { Message, MessageGrid } from './MessageGrid';

export const AdminPage: React.FC = () => {
    const { data } = useGetAdminInsightQuery();

    const [selected, setSelected] = useState('users');
    const [users, setUsers] = useState<User[]>([]);
    const [contactMessages, setContactMessages] = useState<Message[]>([]);

    useEffect(() => {
        if (data?.getAdminInsight.userInsight.users) {
            setUsers(data.getAdminInsight.userInsight.users);
        }

        if (data?.getAdminInsight.contactMessageInsight.contactMessages) {
            setContactMessages(data.getAdminInsight.contactMessageInsight.contactMessages);
        }
    }, [data]);

    return (
        <div className='w-full mx-auto mt-8'>
            <div className='flex flex-col max-w-5xl mx-auto h-full'>
                <div className='grid grid-cols-4 gap-8'>
                    <div
                        onClick={() => setSelected('users')}
                        className={`${selected === 'users' ? 'text-indigo-500' : ''}
                        flex flex-col py-6 shadow-md bg-white 
                        text-center rounded-md text-gray-500 col-span-1`}>
                        <span className='text-4xl font-semibold'>
                            {data?.getAdminInsight.userInsight.totalUsers}
                        </span>
                        Users
                    </div>

                    <div
                        onClick={() => setSelected('messages')}
                        className={`${selected === 'messages' ? 'text-indigo-500' : ''}
                        flex flex-col py-6 shadow-md bg-white 
                        text-center rounded-md text-gray-500 col-span-1`}>
                        <span className='text-4xl font-semibold'>
                            {data?.getAdminInsight.contactMessageInsight.totalMessages}
                        </span>
                        Messages
                    </div>

                    <div
                        className='flex flex-col py-6 shadow-md bg-white
                        text-center rounded-md text-gray-500 col-span-1'>
                        <span className='text-3xl font-semibold'>
                            {data?.getAdminInsight.postInsight.totalPosts}
                        </span>
                        Posts
                    </div>

                    <div
                        className='flex flex-col py-6 shadow-md bg-white
                    text-center rounded-md text-gray-500 ol-span-1'>
                        <span className='text-3xl font-semibold'> N/A</span>
                        Views
                    </div>
                </div>

                <div className='bg-white shadow-md mt-10 mb-4 h-96'>
                    {selected === 'users' && <UserGrid users={users} />}
                    {selected === 'messages' && <MessageGrid messages={contactMessages} />}
                </div>
            </div>
        </div>
    );
};

(AdminPage as any).layout = DashboardLayout;
