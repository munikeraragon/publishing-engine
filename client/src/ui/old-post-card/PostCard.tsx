import { Description } from './Description';
import { Tags } from '../post-card/Tags';
import { Title } from './Title';
import { Metadata } from './Metadata';
import { CoverImage } from './CoverImage';

export interface PostCardProps {
    src: string | undefined | null;
    title: string | undefined;
    description: string | undefined;
    userName: string | undefined;
    userIcon: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
    tags: string[];
    className?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
    src,
    title,
    description,
    userIcon,
    userName,
    creationDate,
    readingTime,
    tags,
    className = ''
}) => {
    return (
        <div
            className={`${className} flex flex-col overflow-hidden rounded-lg
            transition transform hover:-translate-y-1.5 bg-white`}
            style={{ height: 480 }}>
            <div className='flex-shrink-0'>
                <CoverImage src={src} alt='post cover' />
            </div>

            <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                <div className='flex flex-col flex-1'>
                    <Title title={title} />
                    <Description description={description} />
                    <div className='mt-auto'>
                        <Tags tags={tags} size='sm' />
                    </div>
                </div>
                <Metadata
                    userIcon={userIcon}
                    userName={userName}
                    creationDate={creationDate}
                    readingTime={readingTime}
                />
            </div>
        </div>
    );
};
