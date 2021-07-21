import { CoverImage } from './CoverImage';
import { Metadata } from './Metadata';

export interface NotificationCard {
    title: string;
    src: string;
    userName: string;
    userIcon: string;
    creationDate: string;
    readingTime: number;
    tags: string[];
    showCoverImage?: boolean;
}
export const NotificationCard: React.FC<NotificationCard> = ({
    title,
    src,
    userIcon,
    userName,
    readingTime,
    creationDate,
    showCoverImage = false
}) => {
    return (
        <div className='bg-white m-8 shadow-md'>
            {showCoverImage && <CoverImage alt='' src={src} />}
            <Metadata
                title={title}
                userName={userName}
                userIcon={userIcon}
                readingTime={readingTime}
                creationDate={creationDate}
            />
        </div>
    );
};
