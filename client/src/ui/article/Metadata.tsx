import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDeletePostLazyQuery } from '../../generated/apolloComponents';

export interface MetaDataProps {
    postId: number | undefined;
    prettyTitle: string | undefined;
    userIcon: string | undefined;
    userName: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
    wordsNumber: number | undefined;
    isOwner: boolean | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Metadata: React.FC<MetaDataProps> = ({
    postId,
    prettyTitle,
    userIcon,
    userName,
    creationDate,
    readingTime,
    wordsNumber,
    isOwner,
    className = ''
}) => {
    const [useDeletePostQuery, { data, loading, error }] = useDeletePostLazyQuery();
    const [deleting, setDeleting] = useState(false);

    const handleDelete = () => {
        if (postId) {
            setDeleting(true);
            useDeletePostQuery({
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

    if (!userIcon && !userName && !creationDate && !readingTime && !wordsNumber)
        return <MetadataEskeleton className={className} />;

    return (
        <div className={`${className}`}>
            <div className='flex items-center justify-start'>
                <img className='inline-block h-10 w-10 rounded-full' src={userIcon} alt='' />
                <div className='flex flex-col ml-3 text-sm font-medium leading-5'>
                    <p className='text-gray-700'>{userName}</p>
                    <p className='text-gray-500 '>
                        {creationDate}
                        <span className='hidden mx-2 sm:inline'>·</span>
                        <span className='block sm:inline'>{readingTime} min read</span>
                    </p>
                </div>
                {isOwner && (
                    <div className='flex ml-auto'>
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
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                />
                            </svg>
                            {deleting ? 'Deleting...' : 'Delete'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export const MetadataEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return (
        <div className={`${className}`}>
            <div className='flex items-center justify-start'>
                <span className='inline-block h-10 w-10 rounded-full bg-gray-300 animate-pulse' />
                <div className='flex flex-col ml-3'>
                    <span className='h-4 w-24 my-1 bg-gray-300 rounded animate-pulse' />
                    <div className='flex'>
                        <span className='h-4 w-16 my-1 bg-gray-300 rounded mr-4 animate-pulse' />
                        <span className='h-4 w-28 my-1 bg-gray-300 rounded animate-pulse' />
                    </div>
                </div>
            </div>
        </div>
    );
};
