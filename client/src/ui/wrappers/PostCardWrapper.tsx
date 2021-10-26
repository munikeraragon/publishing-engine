import Link from 'next/link';
import { useS3ImageDownload } from '../../modules/s3-service/useS3ImageDownload';
import { PostCard } from '../post-card/PostCard';

export interface PostCardProps {
    imageId: number;
    userName: string;
    title: string;
    prettyTitle: string;
    showEskeleton: boolean;
    creationDate: string;
    readingTime: number;
    userIcon: string;
    tags: string[];
    className?: string;
}

export const PostCardWrapper: React.FC<PostCardProps> = ({
    userName,
    imageId,
    title,
    prettyTitle,
    showEskeleton,
    creationDate,
    readingTime,
    userIcon,
    tags,
    className = ''
}) => {
    const { downloadMetadata } = useS3ImageDownload(imageId);

    return (
        <Link href={`/post/${userName}/${prettyTitle}`}>
            <a>
                <PostCard
                    src={showEskeleton ? undefined : downloadMetadata.imageUrl}
                    title={showEskeleton ? undefined : title}
                    userName={showEskeleton ? undefined : userName}
                    creationDate={showEskeleton ? undefined : creationDate}
                    readingTime={showEskeleton ? undefined : readingTime}
                    userIcon={showEskeleton ? undefined : userIcon}
                    tags={showEskeleton ? [] : tags}
                    className={className}
                />
            </a>
        </Link>
    );
};
