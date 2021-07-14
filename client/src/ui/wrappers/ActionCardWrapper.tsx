import Link from 'next/link';
import { ActionCard } from '../ActionCard';
import { useS3ImageDownload } from '../../modules/s3-service/useS3ImageDownload';

export interface ActionCardProps {
    userName: string;
    imageId: number;
    title: string;
    prettyTitle: string;
    description: string;
    className?: string;
}

export const ActionCardWrapper: React.FC<ActionCardProps> = ({
    userName,
    imageId,
    title,
    prettyTitle,
    description,
    className = ''
}) => {
    const { downloadMetadata } = useS3ImageDownload(imageId);
    return (
        <Link href={`/post/${userName}/${prettyTitle}`}>
            <span>
                <ActionCard
                    src={downloadMetadata ? downloadMetadata.imageUrl : ''}
                    title={title}
                    description={description}
                    className={className}
                />
            </span>
        </Link>
    );
};
