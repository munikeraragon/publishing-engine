import Link from 'next/link';
import { ActionCard } from '../action-card/ActionCard';
import { useS3ImageDownload } from '../../modules/s3-service/useS3ImageDownload';

export interface ActionCardProps {
    imageId: number;
    userName: string;
    title: string;
    prettyTitle: string;
    description: string;
    showEskeleton: boolean;
    completed: number;
    className?: string;
}

export const ActionCardWrapper: React.FC<ActionCardProps> = ({
    userName,
    imageId,
    title,
    prettyTitle,
    description,
    completed,
    showEskeleton,
    className = ''
}) => {
    const { downloadMetadata } = useS3ImageDownload(imageId);
    return (
        <Link href={`/post/${userName}/${prettyTitle}`}>
            <span>
                <ActionCard
                    src={
                        showEskeleton || !downloadMetadata.imageUrl
                            ? undefined
                            : downloadMetadata.imageUrl
                    }
                    title={showEskeleton ? undefined : title}
                    description={showEskeleton ? undefined : description}
                    completed={showEskeleton ? undefined : completed}
                    className={className}
                />
            </span>
        </Link>
    );
};
