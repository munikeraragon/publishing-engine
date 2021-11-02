import { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useDeletePostMutation } from '../../generated/apolloComponents';

export interface EditProps {
    postId: number | undefined;
    prettyTitle: string | undefined;
    userName: string | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Edit: React.FC<EditProps> = ({ postId, prettyTitle, userName, className = '' }) => {
    const [deletePost, { data, loading, error }] = useDeletePostMutation();

    const handleDelete = () => {
        if (postId) {
            deletePost({
                variables: {
                    postId: postId
                }
            });
        }
    };

    useEffect(() => {
        if (data) {
            Router.back();
        }
    }, [loading, error, data]);

    return (
        <div className={`${className}`}>
            <Link
                href={{
                    pathname: '/edit/[userName]/[prettyTitle]',
                    query: { userName: userName, prettyTitle: prettyTitle }
                }}>
                <button className='flex flex-col mb-6 items-center text-gray-500'>
                    <span className='p-2 hover:bg-green-50 hover:text-green-500 rounded-full'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                            />
                        </svg>
                    </span>
                </button>
            </Link>

            <button
                onClick={handleDelete}
                className='flex flex-col mb-6 items-center text-gray-500'>
                <span className='p-2 hover:bg-yellow-50 hover:text-yellow-500 rounded-full'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                    </svg>
                </span>
            </button>
        </div>
    );
};
