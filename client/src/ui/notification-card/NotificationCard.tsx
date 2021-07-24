import { CoverImage } from './CoverImage';
import { Metadata } from './Metadata';

export interface NotificationCard {
    title: string;
    src: string | null;
    userName: string;
    userIcon: string;
    creationDate: string;
    readingTime: number;
    reactions: number;
    comments: number;
    tags: string[];
    showCoverImage?: boolean;
    className?: string;
}
export const NotificationCard: React.FC<NotificationCard> = ({
    title,
    src,
    userIcon,
    userName,
    readingTime,
    creationDate,
    reactions,
    comments,
    tags,
    showCoverImage = false,
    className = ''
}) => {
    return (
        <div className={`${className} bg-white border border-gray-200 hover:border-8 rounded-md`}>
            {showCoverImage && <CoverImage alt='' src={src} />}
            <Metadata
                title={title}
                tags={tags}
                userName={userName}
                userIcon={userIcon}
                readingTime={readingTime}
                creationDate={creationDate}
                reactions={reactions}
                comments={comments}
            />
        </div>
    );
};
