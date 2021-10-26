import { Body } from './Body';
import { CoverImage } from './CoverImage';
import { Metadata } from './Metadata';
import { Title } from './Title';
import { Tags } from '../post-card/Tags';
import { Sidebar } from './Sidebar';
import { Actions } from './Actions';

export interface ArticleProps {
    postId?: number | undefined;
    prettyTitle?: string | undefined;
    title: string | undefined;
    userIcon: string | undefined;
    coverImage: string | null;
    userName: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
    wordsNumber: number | undefined;
    articleBody: string | undefined;
    likes: number;
    comments: number;
    saved: number;
    isSaved: boolean | undefined;
    isLiked: boolean | undefined;
    tags: string[];
    isOwner?: boolean;
    showSidebar?: boolean;
    className?: string;
}

export const Article: React.FC<ArticleProps> = ({
    postId,
    title,
    prettyTitle,
    userIcon,
    coverImage,
    userName,
    creationDate,
    readingTime,
    wordsNumber,
    articleBody,
    tags,
    likes,
    comments,
    saved,
    isSaved,
    isLiked,
    isOwner = false,
    showSidebar = false,
    className = ''
}) => {
    return (
        <div className={className}>
            <CoverImage alt='' src={coverImage} />
            <div className='relative'>
                {showSidebar && (
                    <div className='flex flex-col absolute top-0 bottom-0 right-8'>
                        <Sidebar className='top-10 sticky'>
                            <Actions
                                postId={postId}
                                likes={likes}
                                comments={comments}
                                saved={saved}
                                isSaved={isSaved}
                                isLiked={isLiked}
                            />
                        </Sidebar>
                    </div>
                )}

                <div className={'max-w-4xl mx-auto mt-16 px-2'}>
                    <Title title={title} className='font-bold text-4xl text-center text-gray-800' />
                    <Metadata
                        className='mt-4 justify-center '
                        postId={postId}
                        prettyTitle={prettyTitle}
                        userIcon={userIcon}
                        userName={userName}
                        creationDate={creationDate}
                        readingTime={readingTime}
                        wordsNumber={wordsNumber}
                        isOwner={isOwner}
                    />
                    <Tags
                        className='mt-2 mb-10 justify-center text-indigo-600 font-semibold'
                        tags={tags}
                        size='lg'
                    />
                    <Body articleBody={articleBody} className='my-4' />
                </div>
            </div>
        </div>
    );
};
