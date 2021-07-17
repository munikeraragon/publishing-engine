import { ArticleBody } from './ArticleBody';
import { CoverImage } from './CoverImage';
import { Metadata } from './Metadata';
import { Title } from './Title';
import { Tags, Tag } from './Tags';

export interface ArticleProps {
    title: string | undefined;
    userIcon: string | undefined;
    coverImage: string | null;
    userName: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
    wordsNumber: number | undefined;
    articleBody: string | undefined;
    tags: Tag[];
    className?: string;
}

export const Article: React.FC<ArticleProps> = ({
    title,
    userIcon,
    coverImage,
    userName,
    creationDate,
    readingTime,
    wordsNumber,
    articleBody,
    tags,
    className = ''
}) => {
    return (
        <div className={className}>
            <Title title={title} />
            <Metadata
                className='mt-5'
                userIcon={userIcon}
                userName={userName}
                creationDate={creationDate}
                readingTime={readingTime}
                wordsNumber={wordsNumber}
            />
            <Tags className='mt-3 mb-8' tags={tags} />
            <CoverImage alt='' src={coverImage} />
            <ArticleBody articleBody={articleBody} className='my-4' />
        </div>
    );
};
