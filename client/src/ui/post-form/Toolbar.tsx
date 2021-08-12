import { ImageUploader } from './ImageUploader';

export interface ToolbarProps {
    className?: string;
}
export const Toolbar: React.FC<ToolbarProps> = ({ className = '' }) => {
    return (
        <div className={`${className}`}>
            <ImageUploader />
        </div>
    );
};
