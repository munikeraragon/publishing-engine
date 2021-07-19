import { Description } from './Description';
import { CoverImage } from './CoverImage';
import { Title } from './Title';
import { Actions } from './Actions';

export interface ActionCardProps {
    src: string | undefined;
    title: string | undefined;
    description: string | undefined;
    completed: number | undefined;
    className?: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({
    src,
    title,
    description,
    completed,
    className = ''
}) => {
    return (
        <div
            className={`flex flex-col transition transform hover:-translate-y-1.5
            shadow-md font-semibold hover:shadow-2xl duration-500 rounded-t-lg bg-white
            ${className}`}
            style={{ height: 430 }}>
            <CoverImage src={src} />
            <div className='flex flex-1 flex-col m-3'>
                <Title title={title} />
                <Description description={description} />
                <Actions completed={completed} />
            </div>
        </div>
    );
};
