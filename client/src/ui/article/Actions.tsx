import { useEffect, useState } from 'react';
import {
    useLikePostMutation,
    useSavePostMutation,
    useUnlikePostMutation,
    useUnsavePostMutation
} from '../../generated/apolloComponents';

export interface EditProps {
    postId: number | undefined;
    likes: number;
    comments: number;
    saved: number;
    isSaved: boolean | undefined;
    isLiked: boolean | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Actions: React.FC<EditProps> = ({
    postId,
    likes,
    comments,
    saved,
    isSaved,
    isLiked,
    className = ''
}) => {
    const [likePost, { data: likedStatus }] = useLikePostMutation();
    const [savePost, { data: savedStatus }] = useSavePostMutation();
    const [unlikePost, { data: unlikedStatus, error }] = useUnlikePostMutation();
    const [unsavePost, { data: unsavedStatus }] = useUnsavePostMutation();

    const [state, setState] = useState({ likes, comments, saved, isSaved, isLiked });

    useEffect(() => {
        setState({ likes, comments, saved, isSaved, isLiked });
    }, [likes, comments, saved, isSaved, isLiked]);

    useEffect(() => {
        if (likedStatus?.likePost === 'success') {
            setState((state) => {
                return { ...state, likes: state.likes + 1, isLiked: true };
            });
        }
    }, [likedStatus]);

    useEffect(() => {
        if (unlikedStatus?.unlikePost === 'success') {
            setState((state) => {
                return { ...state, likes: state.likes - 1, isLiked: false };
            });
        }
    }, [unlikedStatus]);

    useEffect(() => {
        if (savedStatus?.savePost === 'success') {
            setState((state) => {
                return { ...state, saved: state.saved + 1, isSaved: true };
            });
        }
    }, [savedStatus]);

    useEffect(() => {
        if (unsavedStatus?.unsavePost === 'success') {
            setState((state) => {
                return { ...state, saved: state.saved - 1, isSaved: false };
            });
        }
    }, [unsavedStatus]);

    const onLike = () => {
        if (postId) {
            likePost({
                variables: {
                    postId: Number(postId)
                }
            });
        }
    };

    const onUnlike = () => {
        if (postId) {
            unlikePost({
                variables: {
                    postId: Number(postId)
                }
            });
        }
    };

    const onSave = () => {
        if (postId) {
            savePost({
                variables: {
                    postId: Number(postId)
                }
            });
        }
    };

    const onUnsave = () => {
        if (postId) {
            unsavePost({
                variables: {
                    postId: Number(postId)
                }
            });
        }
    };

    if (
        likes === undefined ||
        comments === undefined ||
        saved === undefined ||
        isSaved === undefined ||
        isLiked === undefined
    ) {
        return <ActionsEskeleton />;
    }

    return (
        <div className='flex flex-col text-sm'>
            {console.log(unsavedStatus?.unsavePost)}
            {console.log(savedStatus?.savePost)}
            {console.log(error)}
            <button
                onClick={state.isLiked ? onUnlike : onLike}
                className='flex flex-col mb-6 items-center'>
                <span
                    className={`${
                        state.isLiked ? 'bg-red-50 text-red-500' : ''
                    } p-2 hover:bg-red-50 rounded-full hover:text-red-500`}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        />
                    </svg>
                </span>
                <span className={`${state.isLiked ? 'text-red-500' : ''}`}>{state.likes}</span>
            </button>

            <button
                onClick={state.saved ? onUnsave : onSave}
                className='flex flex-col mb-6 items-center'>
                <span
                    className={`${
                        state.isSaved ? 'bg-teal-50 text-teal-400' : ''
                    } p-2 hover:bg-teal-50 hover:text-teal-400 rounded-full`}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                        />
                    </svg>
                </span>
                <span className={`${state.isSaved ? 'text-teal-400' : ''}`}>{state.saved}</span>
            </button>

            <button className='flex flex-col mb-6 items-center'>
                <span className='p-2 hover:bg-indigo-50 hover:text-indigo-500 rounded-full'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                        />
                    </svg>
                </span>
                <span>{state.comments}</span>
            </button>

            <button className='flex flex-col mb-6 p-2 items-center hover:bg-gray-100 rounded-full'>
                <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                    />
                </svg>
            </button>
        </div>
    );
};

export const ActionsEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return (
        <div className='flex flex-col text-sm'>
            <button className='flex flex-col mb-10 items-center rounded-full h-10 w-10 bg-gray-200' />
            <button className='flex flex-col mb-10 items-center rounded-full h-10 w-10 bg-gray-200' />
            <button className='flex flex-col mb-10 items-center rounded-full h-10 w-10 bg-gray-200' />
        </div>
    );
};