import { Body } from './Body';
import { CoverImage } from './CoverImage';
import { Metadata } from './Metadata';
import { Title } from './Title';
import { Tags } from './Tags';

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
    tags: string[];
    isOwner?: boolean;
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
    isOwner = false,
    className = ''
}) => {
    return (
        <div className={className}>
            <Title title={title} />
            <Metadata
                className='mt-5'
                postId={postId}
                prettyTitle={prettyTitle}
                userIcon={userIcon}
                userName={userName}
                creationDate={creationDate}
                readingTime={readingTime}
                wordsNumber={wordsNumber}
                isOwner={isOwner}
            />
            <Tags className='mt-3 mb-8' tags={tags} />
            <CoverImage alt='' src={coverImage} />
            <Body articleBody={articleBody} className='my-4' />
        </div>
    );
};
