import { useEffect, useState } from 'react';
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
    const [deleting, setDeleting] = useState(false);

    const handleDelete = () => {
        if (postId) {
            setDeleting(true);
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
        <div className={`${className} flex ml-auto`}>
            <Link
                href={{
                    pathname: '/edit/[userName]/[prettyTitle]',
                    query: { userName: userName, prettyTitle: prettyTitle }
                }}>
                <a
                    className='w-full flex items-center justify-center
                                text-sm px-3 py-1 border border-transparent
                                rounded-md bg-gray-200 hover:bg-gray-300 mx-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 mr-1'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                    </svg>
                    Edit
                </a>
            </Link>

            <button
                onClick={handleDelete}
                className='w-full flex items-center justify-center text-sm
                            px-3 py-1 border border-transparent rounded-md
                            bg-gray-200 hover:bg-gray-300'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                </svg>
                {deleting ? 'Deleting...' : 'Delete'}
            </button>
        </div>
    );
};
