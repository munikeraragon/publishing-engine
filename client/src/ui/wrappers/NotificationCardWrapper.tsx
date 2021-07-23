import Link from 'next/link';
import { useS3ImageDownload } from '../../modules/s3-service/useS3ImageDownload';
import { NotificationCard } from '../notification-card/NotificationCard';

export interface NotificationCardProps {
    imageId: number;
    userName: string;
    title: string;
    prettyTitle: string;
    creationDate: string;
    readingTime: number;
    userIcon: string;
    tags: string[];
    reactions: number;
    comments: number;
    showCoverImage: boolean;
    className?: string;
}

export const NotificationCardWrapper: React.FC<NotificationCardProps> = ({
    userName,
    imageId,
    title,
    prettyTitle,
    creationDate,
    readingTime,
    userIcon,
    showCoverImage,
    comments,
    reactions,
    tags,
    className = ''
}) => {
    const { downloadMetadata } = useS3ImageDownload(imageId);

    return (
        <Link href={`/post/${userName}/${prettyTitle}`}>
            <span>
                <NotificationCard
                    className={className}
                    title={title}
                    src={downloadMetadata.imageUrl}
                    userIcon={userIcon}
                    showCoverImage={showCoverImage}
                    readingTime={readingTime}
                    creationDate={creationDate}
                    userName={userName}
                    comments={comments}
                    reactions={reactions}
                    tags={tags}
                />
            </span>
        </Link>
    );
};
